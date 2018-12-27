export default {
  reposList: {
    marginTop: 10
  },

  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'white',
    backgroundColor: 'grey',
    marginTop: 2,
    transition: 'scale 0.3s',

    '&:first-child': {
      borderRadius: '5px 5px 0 0'
    },

    '&:last-child': {
      borderRadius: '0 0 5px 5px'
    },

    '&:hover': {
      transform: 'scale(1.05)',
      borderRadius: 5
    }
  },

  repo: {
    width: '100%',
    marginLeft: 5,
    textAlign: 'center'
  },

  nothingBox: {
    backgroundColor: 'grey',
    color: 'white',
    textAlign: 'center',
    borderRadius: 5,
    padding: 10,
    marginTop: 5
  },

  '@global': {
    i: {
      fontSize: '20px !important'
    }
  }
}
