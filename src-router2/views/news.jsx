import React,{Component} from 'react'
export default class News extends Component{
    state = {
        newsArr:['wangjin+1','wangjin+1','wangjin+1']
    }
    render(){
        return(
            <ul>
                {
                    this.state.newsArr.map((news,index) =><li key={index}>{news}</li>)
                }
            </ul>
        )
    }
}