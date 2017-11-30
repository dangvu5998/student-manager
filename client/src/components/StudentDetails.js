import React, {Component} from 'react'
import {FormGroup, Form, ControlLabel, FormControl, Button} from 'react-bootstrap'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
export default class StudentDetails extends Component {

  state = {
    ...this.props.student
  }
  componentWillMount() {
    this.setState({...this.props.student})
    
  }
  componentDidMount() {
    this.setState({...this.props.student})
    
  }
  componentWillReceiveProps(nextProps) {
    this.setState({...nextProps.student})
  }
  render() {
    if(this.props.student)
    return(
      <Form>
        <FormGroup>
          <ControlLabel>MSSV</ControlLabel>        
          <FormControl disabled={this.props.privilege.indexOf('admin') === -1} type="text" value={this.state.studentId} onChange={e => this.setState({surName: e.target.value})}/>
          <FormControl.Feedback/>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Họ</ControlLabel>        
          <FormControl disabled={this.props.privilege.indexOf('admin') === -1} type="text" value={this.state.surName} onChange={e => this.setState({surName: e.target.value})}/>
          <FormControl.Feedback/>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Tên đệm</ControlLabel>
          <FormControl disabled={this.props.privilege.indexOf('admin') === -1} type="text" value={this.state.midName} onChange={e => this.setState({midName: e.target.value})} />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Tên</ControlLabel>
          <FormControl disabled={this.props.privilege.indexOf('admin') === -1} type="text" value={this.state.priName} onChange={e => this.setState({priName: e.target.value})} />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Ngày sinh</ControlLabel>
          <DatePicker disabled={this.props.privilege.indexOf('admin') === -1} selected={moment(this.state.birth)} onChange={date => this.setState({birth: date})} dateFormat='DD/MM/YYYY' />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Lớp</ControlLabel>
          <FormControl disabled={this.props.privilege.indexOf('admin') === -1} type="text" value={this.state.class} onChange={e => this.setState({class: e.target.value})} />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Chương trình đào tạo</ControlLabel>
          <FormControl disabled={this.props.privilege.indexOf('admin') === -1} type="text" value={this.state.eduProgram} onChange={e => this.setState({eduProgram: e.target.value})} />
          <FormControl.Feedback />
        </FormGroup>
        <Button onClick={e => this.props.cancel()}>Cancel</Button>
      </Form>
    )
    return null
  }
}