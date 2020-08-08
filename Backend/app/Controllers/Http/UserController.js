'use strict'
const User = use('App/Models/User')

class UserController {
  async store({ request, response }) {

    try {
      const data = await request.all()

      const user = await User.create(data)
      await user.save()

      return user
    } catch (erro) {

      return response.status(500).send({ Erro: 'Problema no cadastro !', erro })

    }
  }

  async index({ request, response }) {
    const user = await User.all()

    return user
  }

  async show({ request, response, params }) {

    try {
      const filtro = await params.index

      const pesquisa = await User.findByOrFail('id', filtro)
    } catch (erro) {
      return response.status(404).send({ Mensagem: 'Usuario não localizado !', erro })

    }
  }
}

module.exports = UserController
