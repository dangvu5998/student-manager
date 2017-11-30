import React, { Component } from 'react'
import * as actions from './actions/actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import DashBoard from './components/DashBoard'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
class App extends Component {
  render() {
    const {studentList, actions} = this.props
    console.log(window.location.href)
    return(
      <Router>
        <Switch>
        
          <Route path='/dashboard' render={(props) => <DashBoard studentList={studentList} actions={actions} {...props} />} />
          <Route path='/' render={()=> <Redirect to="/dashboard" />} />
        </Switch>
      </Router>
    )
  }
}
const mapStateToProps = state => {
  return {studentList: state.studentList}
}
const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(actions, dispatch)}
}
export default connect(mapStateToProps, mapDispatchToProps)(App)