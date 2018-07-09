import React from 'react'
import { connect } from 'react-redux'
import { disconnect } from '../store/websocket'

const LogoutButton = ({ dispatch }) => (
  <button onClick={() => { dispatch({ type: disconnect }) }}>
    Logout
    </button >
)

const mapStateToProps = (state) => ({
  connected: state.connection.connected,
})

export default connect(mapStateToProps)(LogoutButton)