import React,{Component} from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'
export default class Main extends Component{
    state = {
        firstView:true,
        loading:false,
        users:[],
        errorMsg:''
    }
    componentDidMount(){
        PubSub.subscribe('search',(message,searchName) =>{
            this.setState({
                firstView:false,
                loading:true,
            })
            const url = `https://api.github.com/search/users?q=${searchName}`
            axios.get(url)
                .then(response =>{
                    const users = response.data.items.map(item =>({
                        url:item.html_url,
                        avatarUrl:item.avatar_url,
                        name:item.login
                    }))
                    this.setState({
                        loading:false,
                        users
                    })
                })
                .catch(error =>{
                    this.setState({
                        loading:false,
                        errorMsg:'请求失败'
                    })
                })
        })
    }
    render(){
        const {firstView,loading,users,errorMsg} = this.state
        if(firstView){
            return <h2>输入关键字进行查询</h2>
        }else if(loading){
            return <h2>Loading...</h2>
        }else if(errorMsg){
            return <h2>{errorMsg}</h2>
        }else{
            return(
                <div className="row">
                    {
                    users.map((users,index) => (
                        <div className="card" key={index}>
                            <a href={users.url} target="_blank">
                                <img src={users.avatarUrl} style={{width:100}}/>
                            </a>
                            <p className="card-text">{users.name}</p>
                        </div>
                    ))
                    }
                </div>
            )
        }
    }
}