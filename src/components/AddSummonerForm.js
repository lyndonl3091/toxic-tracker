import React, { Component } from 'react'
import SummonerActions from '../actions/SummonerActions'

export default class AddSummonerForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      note:''
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    if (!this.state.name.length) return;  //return if summoner name is empty
    SummonerActions.addNewSummoner(this.state);
    this.setStae({name:'', note:''})
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="summonerName">Summoner Name:</label>
          <input type="text"
                 className="form-control"
                 id="summonerName"
                 placeholder="Summoner Name"
                 value={this.state.name}
                 onChange={e => this.setState({name: e.target.value})}
                 />
        </div>
        <div className="form-group">
          <label htmlFor="tenantEmail">Email</label>
          <input type="email"
                 className="form-control"
                 id="tenantEmail"
                 placeholder="bob@jones.com"
                 value={this.state.email}
                 onChange={e => this.setState({email: e.target.value})}
                 />
        </div>
        <button className="btn btn-default"
                onClick={this.onSubmit}
                >Submit</button>
      </form>
    )
  }
}
