import React, { Component } from 'react';

class Category extends Component {

    render() {
        if(this.props.selectedState == null) {
            return <h1>{"States"}</h1>;
        } else {
        return <h1>{"Test" + this.props.selectedState}</h1>;
        }
    }
  }

export default Category