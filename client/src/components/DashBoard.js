import React, {Component} from 'react'
import {Grid, Col} from 'react-bootstrap'
import SearchComponent from './SearchComponent'
import StudentList from './StudentList'
import StudentDetails from './StudentDetails'
import PaginationStudent from './PaginationStudent'
export default class DashBoard extends Component {
  state = {
    selectedStudent: null
  }
  selectItem(id) {
    const student = this.props.students.list.find(student => student.studentId === id)
    this.setState({selectedStudent: student})
  }
  cancelSelect(){
    this.setState({selectedStudent: null})
  }
  
  renderData() {
    const {students, status} = this.props
    if(status.fetching) {
      return <h2>Loading...</h2>
    }
    else if(status.error) {
      return <h2>Error</h2>
    }
    else return <StudentList getSelecting={id => this.selectItem(id)} students={students.list}/>
  }
  render() {
    const {actions, students, status} = this.props
    return(
      <Grid fluid>
        <Col xs={12} md={8}>
          <SearchComponent {...actions} status={status}/>
          {this.renderData()}
          <PaginationStudent activePage={students.page} maxPage={students.maxPage} handleSelect={page => actions.fetchStudentsByPage(status.key, status.val, page)}/>
        </Col>
        <Col xs={12} md={4}>  
          <StudentDetails privilege={[]} student={this.state.selectedStudent} cancel={this.cancelSelect.bind(this)}/>

        </Col>
      </Grid>

    )
  }
}