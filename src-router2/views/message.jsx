import React,{Component} from 'react'
import {Link,Route} from 'react-router-dom'
import MessageDetail from './message-detail'
export default class Message extends Component{
    state = {
        messages:[]
    }
    componentDidMount(){
        this.intervalId = setTimeout(() =>{
            const messages = [
                {id:1,title:'wangjinzzz'},
                {id:2,title:'wangjinjjj'},
                {id:3,title:'wangjinlll'},
            ]
            this.setState({messages})
        },1000)
    }
    componentWillUnmount(){
        clearTimeout(this.intervalId)
    }
    showDetail = (id) =>{
        this.props.history.push('/home/message/'+id)
    }
    showDetail2 = (id) =>{
        this.props.history.replace('/home/message/'+id)
    }
    render(){
        return(
           <div>
               <ul>
                   {
                       this.state.messages.map((m,index) =>(
                           <li key={index}>
                               <Link to={'/home/message/'+m.id}>{m.title}</Link>
                               <button onClick={() =>{this.showDetail(m.id)}}>push查看</button>
                               <button onClick={() =>{this.showDetail2(m.id)}}>replace查看</button>
                           </li>
                       ))
                   }
               </ul>
               <p>
                   <button onClick={() =>{this.props.history.goBack()}}>回退</button>
                   <button onClick={() =>{this.props.history.goForward()}}>前进</button>
               </p>
               <Route path='/home/message/:id' component={MessageDetail}/>
           </div>
        )
    }
}