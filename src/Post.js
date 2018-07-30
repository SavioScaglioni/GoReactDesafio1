import React, { Component } from "react";
import PostHeader from "./PostHeader";
class Post extends Component {
  render() {
    return this.props.data.map(post => (
      <div className="post-content" key={post.id}>
        <PostHeader data={post} />
        <h3>{post.texto}</h3>
      </div>
    ));
  }
}
export default Post;
