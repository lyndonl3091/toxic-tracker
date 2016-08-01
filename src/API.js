import { get, post, ajax } from 'jquery'

import ServerActions from './actions/ServerActions'

const API = {
  getAllSummoners() {
    get('/api/summoners')
    .done(response => { ServerActions.receiveTenants(response)})
  },

  addNewSummoner(summoner) {
    post('/api/summoners', summoner)
    ,done(response => { ServerActions.receiveOneSummoner(response)})
  },

}

export default API
