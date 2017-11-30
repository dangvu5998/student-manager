import React, { Component } from 'react'
import StudentItem from './StudentItem'
import { Table } from 'react-bootstrap'
class StudentList extends Component {
  state = {
    active: null
  }
  handleSelect(id) {
    this.props.getSelecting(id)
  }
  render() {
    var listStudent = this.props.students.map(student => <StudentItem handleSelect={this.handleSelect.bind(this)} key={student.studentId} {...student} />)
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th width="15%">MSSV</th>
            <th>Họ và tên</th>
            <th>Lớp</th>
          </tr>
        </thead>
        <tbody>
          {listStudent}
        </tbody>
      </Table>
    )
  }
}

export default StudentList