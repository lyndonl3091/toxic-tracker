import React, { Component } from 'react'
import Summoner from './Summoner' //for editing

export default class SummonersDisplay extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let { summoners } = this.props
    let display = summoners.length && summoners.map(summoner => <Summoner key={summoner._id} summoner={summoner} />);

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Notes</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="text-left">
          {display || No Toxic Summoners to Display}
        </tbody>
      </table>
    )
  }
}
