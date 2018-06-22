import React,{Component} from 'react'
const messageDetail = [
    {id:1,title:'wai01',content:'wangjinaixxxxxy'},
    {id:2,title:'wai02',content:'wangjinaijjjjjy'},
    {id:3,title:'wai03',content:'wangjinaizzzzzw'}
]
export default class MessageDetail extends Component{
    render(){
        const id = this.props.match.params.id * 1
        const md = messageDetail.find((md,index) =>md.id===id)
        return(
            <ul>
                <li>ID:{id}</li>
                <li>Title:{md.title}</li>
                <li>Content:{md.content}</li>
            </ul>
        )
    }
}