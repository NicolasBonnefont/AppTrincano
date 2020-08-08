'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager')

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')

Route.post('api/user' , 'UserController.store')
Route.get('api/user' , 'UserController.index')

Route.post('api/login', 'LoginController.login')

Route.group(() => {



}).middleware('auth')
