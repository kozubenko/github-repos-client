export default {
  app: {
    display: 'flex',
    justifyContent: 'center',
    background: '#FAFBFC',
    minHeight: '100vh'
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 0',
    minWidth: 320
  },

  actionButton: {
    cursor: 'pointer',
    width: '100%',
    textAlign: 'center',
    border: '0.5px solid grey',
    padding: '12px 0',
    backgroundColor: ({ isAuthorized }) => isAuthorized ? '#b5202c' : '#28a745',
    backgroundImage: ({ isAuthorized }) => isAuthorized ? 'none' : 'linear-gradient(-180deg,#34d058,#28a745 90%)',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 5
  }
}
