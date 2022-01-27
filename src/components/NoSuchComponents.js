import React from "react";

//const NoSuchComponents = ({ err, ...props }, param) => {
const NoSuchComponents = (props, param) => {

  return <div>
    Components not find
    { JSON.stringify(['this', this]) }
    { JSON.stringify(['param', param]) }
    { JSON.stringify(['props', props]) }
  </div>

}

//NoSuchComponents.go = () => {
//  console.log('NoSuchComponents go called')
//};

export default NoSuchComponents;
//
//import React, { Component } from "react";
//
//export default class NoSuchComponents extends Component {
//  constructor(props) {
//    super(props);
//
//    this.state = {
//      content: ""
//    };
//
//    this.go = this.go.bind(this);
//  }
//
//  go(e) {
//    this.err = e;
//    console.log('NoSuchComponents go called')
//  }
//
//  render() {
//    return (
//      <div>
//        Components not find
//        { JSON.stringify(['this', this.err]) }
//      </div>
//    );
//  }
//}
////        { JSON.stringify(['this', this]) }
////        { JSON.stringify(['props', this.props]) }
