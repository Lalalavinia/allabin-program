import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Homepage from './homepage';

const div1 = {
    fontFamily: "Segoe UI",
    fontSize: "32px",
    color: "#E3DA63",
    margin: "50px",
    fontStyle:"italic",
}

const div2 = {
    textAlign:"center",
}

const btnStart = {
    //textAlign: "center",
    //width:"80px",
    fontSize:"20px",
    padding:"20px 40px",
    textAlign:"center",
}

// export default class Welcome extends Component {
const Welcomepage = () =>{
    // constructor(props){
    //     super(props);
    //     this.handleClickBtn = this.handleClickBtn.bind(this);
    // }
    // handleClickBtn(props){
    //     this.props.history.push('./homepage');
    // }
    function toHomepage(){
        return(
            console.log("123")
            // <div>
            //     <Homepage />
            // </div>
        );
    }
        return (
            <div>
                <div style={div1}>
                    <h1>Welcome to use 6000PCR Post Column Reactor </h1>
                </div>
                <div style = {div2}>
                     <Link to = '/homepage'> 
                    <button style = {btnStart} alt = 'start' onClick = {toHomepage}>Start</button>
                    </Link> 
                </div>
            </div>

        );
    }
    export default Welcomepage;