'use strict'
const User = use('App/Models/User')

class LoginController {
  async login({ response, request, params, auth }) {


    const { email, senha } = request.all()

    const token = await auth.attempt(email, senha)

    return token

  }

  async logado({auth}){

    const usuario = await auth.getUser()

    return usuario

  }

}

module.exports = LoginController
