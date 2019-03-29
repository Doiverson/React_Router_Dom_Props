import React, { Component } from 'react';


// Class Componentでpropsを呼び出すとき
// ＝＞ `this.props.name`
//
// Functional Componentでpropsを呼び出すとき
// ＝＞ `props.name` (thisはClass Componentの時のみつける)

const LinkDest = (props) => (
     <div>{props.test}</div>
)

export default LinkDest;
