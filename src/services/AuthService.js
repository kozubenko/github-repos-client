class AuthService {
  isAuthorized () {
    return Boolean(this.getAccessToken())
  }

  setAccessToken (token) {
    localStorage.setItem('accessToken', token)
  }

  getAccessToken () {
    return localStorage.getItem('accessToken')
  }

  logout () {
    localStorage.removeItem('accessToken')
  }
}

export default new AuthService()
