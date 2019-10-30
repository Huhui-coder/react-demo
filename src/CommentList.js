import React, { Component } from 'react';
import Comment from './Comment'

class CommentList extends Component {
    static defaultProps = {
        comments: []
      } //类属性，防止父组件没传参数而报错
    render() {
        return (
            <div>
                {this.props.comments.map((comment, i) => <Comment comment={comment} key={i} />)
                }
            </div>
        )
    }
}
export default CommentList