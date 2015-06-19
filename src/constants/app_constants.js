export default {
  Events: {
    CHANGE: 'CHANGE'
  },

  ActionTypes: {
    CHANGE_PASSWORD: 'CHANGE_PASSWORD',
    CHANGE_USERNAME: 'CHANGE_USERNAME',
    FAILED_SIGN_IN: 'FAILED_SIGN_IN',
    HIDE_LOCK: 'HIDE_LOCK',
    RECEIVE_CLIENT: 'RECEIVE_CLIENT',
    SETUP_LOCK: 'SETUP_LOCK',
    SHOW_LOCK: 'SHOW_LOCK',
    SIGN_IN: 'SIGN_IN',
    SUCCESSFUL_SIGN_IN: 'SUCCESSFUL_SIGN_IN'
  },

  LockStates: {
    FAILED_SIGN_IN: 'FAILED_SIGN_IN',
    READY: 'READY',
    SIGNED_IN: 'SIGNED_IN',
    SIGNING_IN: 'SIGNING_IN'
  }
}
