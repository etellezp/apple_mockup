const Auth = {
  isAuthenticated: false,


  login() {
    this.isAuthenticated = true
  },

  signout() {
    this.isAuthenticated = false
  },

  signup() {
    this.isAuthenticated = true
  },

  isAuth() {
    return this.isAuthenticated
  }
}

export default Auth
