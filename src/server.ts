import express from 'express'

const app = express();
app.use(express.json());

//Método de chamada ao keycloak

app.listen(9090, () => console.log('server on'));
