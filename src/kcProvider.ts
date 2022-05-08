import KcAdminClient from '@keycloak/keycloak-admin-client';

const kcAdminClient = new KcAdminClient({
  baseUrl: 'http://localhost:8080/auth',
  realmName: 'dev'
});

export class KcProvider {

  static async createUser(token: string){
    let response = null;
    try {
      kcAdminClient.setAccessToken(token)
      response = kcAdminClient.users.create({
        username: "Nori",
        lastName: "sei lá",
        firstName: "Leonardo",
        credentials: [{
          type: 'password',
          value: 'teste',
          temporary: false
        }]
      })
    } catch (error) {
      console.log(error)
    }
    return response;
  }
}