import React, {Component} from 'react'
// 只打包引入组件
import {Button, Toast} from 'antd-mobile';

export default class App extends Component {
  handleClick = () =>{
    Toast.info('马凯是大傻逼!!!')
  }
  render() {
    return (
          <Button type='warning' onClick={this.handleClick}>王晋+1</Button>
    )
  }
}