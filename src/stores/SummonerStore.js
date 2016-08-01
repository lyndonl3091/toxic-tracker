import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _summoners = []

class SummonerStore extends EventEmitter  {
  constructor(props) {
    super(props)

    AppDispatcher.register(action => {
      switch(action.actionType) {
        case 'RECEIVE_ONE_SUMMONER':
        _summoners.push(action.summoner);
        this.emit('CHANGE')
        break;
      }
    })
  }

  getAllSummoners() {
    return _summoners;
  }

  startListening(cb) {
    this.on('CHANGE', cb)
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb)
  }
}

export default new SummonerStore();
