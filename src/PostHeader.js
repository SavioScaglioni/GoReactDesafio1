import React, { Component } from "react";

class PostHeader extends Component {
  render() {
    return (
      <div className="header-content">
        <img src={this.props.data.imagem} className="Avatar" />
        <p className="content-title">{this.props.data.nome}</p>
        <p className="content-title"> Há {this.props.data.hora}</p>
      </div>
    );
  }
}

export default PostHeader;
