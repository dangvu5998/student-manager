import React, { Component } from 'react'

class StudentItem extends Component {

  render() {
    let fullName = `${this.props.surName} ${this.props.midName} ${this.props.priName}`
    let studentClass = this.props.class
    return (
      <tr onClick={() => this.props.handleSelect(this.props.studentId)} style={{cursor: "pointer"}}>
        <td>{this.props.studentId}</td>
        <td>{fullName}</td>
        <td>{studentClass}</td>
      </tr> 
    )
  }
}
export default StudentItem