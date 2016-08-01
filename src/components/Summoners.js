import React, { Component } from 'react'

import AddSummonerForm from './AddSummonerForm'
import SummonersDisplay from './SummonerDisplay'

import SummonerStore from '../stores/SummonerStore'
import SummonerActions from '../actions/SummonerActions'

let _getComponentState = () => { //gets all summoners on load
  return {
    summoners: SummonerStore.getAllSummoners()
  }
}

export default class Summoners extends Component {
  constructor(props) {
    super(props);

    this.state = _getComponentState()

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    SummonerActions.getAllSummoners();
    SummonerStore.startListening(this.onChange);
  }

  componentWillUnmount() {
    SummonerStore.startListening(this._onChange);
  }

  _onChange() {
    this.setState(_getComponentState());
  }

  render
}
