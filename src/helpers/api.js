import axios from 'axios'

const {
  REACT_APP_BASE_GITHUB_URL,
  REACT_APP_CLIENT_ID,
  REACT_APP_CLIENT_SECRET
} = process.env

export const loginGithubUrl = `${REACT_APP_BASE_GITHUB_URL}?client_id=${REACT_APP_CLIENT_ID}`

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 5000
})

const backendApi = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 5000
})

githubApi.interceptors.request.use(function (config) {
  const token = localStorage.getItem('accessToken')

  config.headers = { Authorization: `token ${token}` }
  return config
})

export default {
  getUser: () => githubApi.get('/user'),
  getAccessToken: (code) => backendApi.get('/request_github_token', { params: {
    client_id: REACT_APP_CLIENT_ID,
    client_secret: REACT_APP_CLIENT_SECRET,
    code
  } }),
  getReposList: (login) => githubApi.get(`/users/${login}/repos`)
}
