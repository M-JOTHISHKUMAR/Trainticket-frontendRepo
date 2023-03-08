import axios from "axios";
import React, { Component } from "react";

class Showdata extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/showDetails')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        
      <table border={1}>
      <thead>
        <tr>
            <th>Ticket</th>
          <th>Name</th>
          <th>berth</th>
          <th>Gender</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.ticket}>
            <td>{user.ticket}</td>
            <td>{user.name}</td>
            <td>{user.berth}</td>
            <td>{user.gender}</td>
            <td>{user.dob}</td>
          </tr>
        ))}
      </tbody>
    </table>
    );
  }}
  
export default Showdata;