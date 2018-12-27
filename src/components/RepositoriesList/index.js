// react
import React from 'react'

// styles
import injectSheet from 'react-jss'
import styles from './styles'

const RepositoriesList = ({ classes, repos }) => {
  if (repos.length) {
    return (
      <div className={classes.reposList}>
        {repos.map(({ id, name, html_url: url }) => (
          <a href={url} target='_blank' rel='noopener noreferrer' key={id} className={classes.item}>
            <i className='fa fa-github' />
            <span className={classes.repo}>{name}</span>
          </a>
        ))}
      </div>
    )
  } else {
    return (
      <div className={classes.nothingBox}>
        You do not have any repositories
      </div>
    )
  }
}

export default injectSheet(styles)(RepositoriesList)
