"use strict";

const User = use("App/Models/User");

class AuthController {
  async register({ request }) {
    const data = request.only(["name", "password"]);

    const user = await User.create(data);

    return user;
  }

  async authenticate({ request, auth }) {
    const { name, password } = request.all();

    const token = await auth.attempt(name, password);

    return token;
  }
}

module.exports = AuthController;
