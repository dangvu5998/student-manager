import React, {Component} from 'react'
import {Pagination} from 'react-bootstrap'

export default class PaginationStudent extends Component {


  
  render() {
    if(this.props.maxPage && this.props.maxPage > 1)
    return (
      <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={this.props.maxPage}
        maxButtons={5}
        activePage={this.props.activePage}
        onSelect={this.props.handleSelect}
      />
    )
    else
    return null
  }
};