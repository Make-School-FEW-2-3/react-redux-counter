import React, { Component } from 'react'
import { connect } from 'react-redux'
import {increment, decrement } from '../actions/'

export class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <p>
          <button onClick={() => {this.props.decrement()}}> - </button>
          <button onClick={() => {this.props.increment()}}> + </button>
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = () => {
  return {
    increment,
    decrement
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Counter)
