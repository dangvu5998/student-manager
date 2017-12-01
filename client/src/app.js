import React, { Component } from 'react'
import * as actions from './actions/actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import DashBoard from './components/DashBoard'
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
class App extends Component {
  render() {
    const {students, actions, checkoutStatus} = this.props
    return(
      <Router>
        
        <div>
          <Route path='/' component={NavBar} />
          <Switch>
            <Route path='/dashboard' render={(props) => <DashBoard students={students} status={checkoutStatus} actions={actions} {...props} />} />
            <Route path='/' render={()=> <Redirect to="/dashboard" />} />
          </Switch>
        </div>
      </Router>
    )
  }
}
const mapStateToProps = state => {
  const { students, checkoutStatus } = state
  return {
    students,
    checkoutStatus
  }
}
const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(actions, dispatch)}
}
export default connect(mapStateToProps, mapDispatchToProps)(App)