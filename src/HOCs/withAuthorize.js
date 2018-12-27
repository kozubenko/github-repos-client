// react
import React, { Component } from 'react'

// helpers
import queryString from 'query-string'
import { loginGithubUrl } from 'helpers/api'
import api from 'helpers/api'

// services
import AuthService from 'services/AuthService'

export default function withAuthorize(WrappedComponent) {
  return class ComponentWithAuthorize extends Component {
    state = {
      isAuthorized: AuthService.isAuthorized()
    }
    
    componentDidMount() {
      this.checkCodeInQuery()
    }
    
    checkCodeInQuery = () => {
      const { isAuthorized } = this.state
      const { code } = queryString.parse(window.location.search)
      if (code && !isAuthorized) this.fetchAccessToken(code)
    }
		
    loginGithub = () => window.location.replace(loginGithubUrl)

    logoutGithub = () => {
      this.setState({ isAuthorized: false })
      AuthService.logout()
    }
    
    fetchAccessToken = async (code) => {
      const response = await api.getAccessToken(code)
      
      AuthService.setAccessToken(response.data.accessToken)
      this.setState({ isAuthorized: true })
      window.history.pushState({}, 'Github App', '/')
    }
    
    render() {
      const { isAuthorized } = this.state
	    
      return (
        <WrappedComponent
          {...this.props}
          isAuthorized={isAuthorized}
          logoutGithub={this.logoutGithub}
          loginGithub={this.loginGithub}
          fetchAccessToken={this.fetchAccessToken}
        />
      )
    }
  }
}