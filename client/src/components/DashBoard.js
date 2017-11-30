import React, {Component} from 'react'
import {Grid, Col} from 'react-bootstrap'
import SearchComponent from './SearchComponent'
import StudentList from './StudentList'
import {Route} from 'react-router-dom'
import StudentDetails from './StudentDetails'
export default class DashBoard extends Component {
  state = {
    selectedStudent: null
  }
  selectItem(id) {
    const student = this.props.studentList.find(student => student.studentId === id)
    this.setState({selectedStudent: student})
  }
  
  
  render() {
    const {actions, studentList} = this.props
    return(
      <Grid fluid>
        <Col xs={12} md={8}>
          <SearchComponent {...actions}/>
          <StudentList getSelecting={id => this.selectItem(id)} students={studentList}/>
        </Col>
        <Col xs={12} md={4}>  
          <StudentDetails privilege={[]} student={this.state.selectedStudent} />

        </Col>
      </Grid>

    )
  }
}