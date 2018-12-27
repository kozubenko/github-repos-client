// react
import React, { Component } from 'react'

// helpers
import api from 'helpers/api'

// HOCs
import withAuthorize from 'HOCs/withAuthorize'

// components
import RepositoriesList from '../RepositoriesList'

// styles
import injectSheet from 'react-jss'
import styles from './styles'

class App extends Component {
    state = {
      resources: [],
      isLoaded: false
    }

  componentDidMount() {
    const { isAuthorized } = this.props
    
    if (isAuthorized) this.fetchUserData()
  }

  componentDidUpdate() {
    const { isLoaded } = this.state
    const { isAuthorized } = this.props
    
    if (isAuthorized && !isLoaded) this.fetchUserData()
  }

  fetchUserData = async () => {
    const user = await api.getUser()
    const repos = await api.getReposList(user.data.login)
    
    this.setState({resources: repos.data, isLoaded: true})
  }

  logout = () => {
    const { logoutGithub } = this.props
    
    logoutGithub()
    this.setState({ resources: [], isLoaded: false })
  }

  render() {
    const { resources, isLoaded } = this.state
    const { classes, isAuthorized, loginGithub } = this.props
    
    return (
      <div className={classes.app}>
        <div className={classes.container}>
          {isAuthorized ? (<div className={classes.actionButton} onClick={this.logout}>Logout</div>)
                        : (<div className={classes.actionButton} onClick={loginGithub}>Login</div>)
          }
          {isLoaded && <RepositoriesList repos={resources} />}
        </div>
      </div>
    )
  }
}

const styledComponent = injectSheet(styles)(App)

export default withAuthorize(styledComponent)
