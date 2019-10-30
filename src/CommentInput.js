import React, { Component } from 'react'

class CommentInput extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            context: ''
        }
    }
    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }
    handleContextChange(event) {
        this.setState({
            context: event.target.value
        })
    }
    handleSubmit(){  //注意此处的逻辑，我们想要的是 子组件传参数给父组件，父组件再通过props传参给另一个子组件。
        //子组件传参，用的是 类似vue中的emit-on的形式进行传参的。子组件调用父组件传递过来的函数，将参数用形参的方式传递过去。
        if(this.props.onSubmit){
            const {username,context} = this.state;
            this.props.onSubmit({username,context})
            this.setState({context:''})
        }
    }
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username} onChange={this.handleUsernameChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea value={this.state.context} onChange={this.handleContextChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
          </button>
                </div>
            </div>
        )
    }
}

export default CommentInput