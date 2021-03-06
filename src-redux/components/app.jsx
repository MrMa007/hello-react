import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as actions from '../redux/actions'

export default class App extends Component {
    static propTypes = {
        state:PropTypes.object.isRequired
    }
    increment = () =>{
        const number = this.select.value * 1
        this.props.store.dispatch(actions.increment(number))
    }
    decrement = () =>{
        const number = this.select.value * 1
        this.props.store.dispatch(actions.decrement(number))
    }
    incrementIfOdd = () =>{
        const number = this.select.value * 1
        const count = this.props.store.getState()
        if(count%2===1){
            this.props.store.dispatch(actions.increment(number))
        }
    }
    incrementAsync = () =>{
        setTimeout(() =>{
            const number = this.select.value * 1
            this.props.store.dispatch(actions.increment(number))
        },1000)
    }
  render() {
    const  count = this.props.store.getState()
    return (
        <div>
          <p>王晋 + {count} times</p>
          <select ref={select => this.select=select}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="4">4</option>
          </select>&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
          <button onClick={this.incrementAsync}>increment saync</button>&nbsp;
        </div>
    )
  }
}