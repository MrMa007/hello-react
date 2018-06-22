
import React,{Component} from 'react'
import './App.css'
import logo from './logo.svg'

export default class App extends Component{
    render(){
        return(
          <div>
              <img src={logo} alt="logo" style={{width:100,height:100}}/>
              <h1 className="title">马凯是个大傻逼</h1>
          </div>
        )
    }
}