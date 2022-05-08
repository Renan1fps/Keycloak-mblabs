import axios from "axios";
import express from "express"
import { KcProvider } from "./kcProvider";
const base = 'http://localhost:8080/auth/realms/dev/protocol/openid-connect/token'

const app = express()
app.use(express.json())


app.post("/auth", async(req, res)=> {
  let response = null;
  try {
    const {data} = await axios.post(base, new URLSearchParams({
      client_id: 'kickante-back',
      client_secret: 'NWi0lFhZiHc6BsO7qHoPR100ihd2xgCw',
      grant_type: 'password',
      username: 'teste',
      password: 'teste',
      scope: 'openid'
    }))
    response = data
  } catch (error) {
      console.log(error)
  }

  res.status(200).json(response)
})


app.post('/user/2', async (req, res)=> {
  let response = null;

  try {
    response = await KcProvider.createUser(`token`);
  } catch (error) {
    console.log(error);
  }

  res.status(200).json(response)
})


app.post("/user", async(req, res)=> {
  let response = null;
  try {
    const {data} = await axios.post('http://localhost:8080/auth/admin/realms/dev/users', {
      username: 'mblabs',
      firstName: 'mb',
      lastName: 'labs',
    }, {
      headers: {
        authorization: "Bearer token"
      }
    })
    response = data
  } catch (error) {
      console.log(error)
  }

  res.status(200).json(response)
})
app.listen(8000, () => console.log("Server running!"));