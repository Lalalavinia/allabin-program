import React, { Component,useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
//import teal from '@material-ui/core/colors/teal';
//import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import add from '../imgs/add.png';
import subtract from '../imgs/subtract.png';
import ok from '../imgs/OK.png';
import './homepage.css';

/* const Button = ({handleClick,text}) => {
    return (
      <button onClick={handleClick}>
        {text}
      </button>
    )
  } */
/*   const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(10),
    },
  }));
 */
 
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FFF',
            light: '#ffffff',
            dark: '#b2b2b2'
        },
        secondary: {
            main: '#709486',
            light: '#8ca99e',
            dark: '#4e675d'
        },
    },
});

const Keyboard =() =>{
    return(
            <IconButton aria-label="keyboard" size="small">
          <KeyboardIcon />
        </IconButton>
    )
}

const ControlPanel = (props) => {
    return (
        <div className='panel'>
            <ThemeProvider theme={theme}>
                <Button variant="outlined" size="small" color="secondary" >{props.text1}</Button>
                <Button variant="outlined" size="small" color="secondary" >{props.text2}</Button>
            </ThemeProvider>
        </div>
    )
}


const Screen = () => {
    return (
        <div>
            <p>Please select the function you need.</p>
        </div>
    )
}
const OperateButton = (props) => {
    return (
        <Link to="/path">
        <img src={props.img}  alt="props.alt" /></Link>
    )
}
export default class Homepage extends Component {
    constructor(props){
        super();
        this.handleClickBtn = this.handleClickBtn.bind(this);
     }
     handleClickBtn(){
        this.props.history.push('');
     }
    
    render() {
        return (
            <div className = 'whole'>
                <div className = 'screen'> 
                    <Screen></Screen>
                    <KeyboardIcon className = 'keyboard'></KeyboardIcon>
                </div>
                <div className = 'controlpanel'>
                    <ControlPanel text1="R/S" text2="Prime" />
                    <div className ='operator'>
                        <div className ='add-sub'>
                            <OperateButton img = {add} alt = "add" ></OperateButton>
                            <OperateButton img = {subtract} alt = "subtract"></OperateButton>
                            </div>
                            <div className = 'ok'>
                            <OperateButton img = {ok} alt = "ok"></OperateButton>
                            
                        </div>
                    </div>
                    <ControlPanel text1="Information" text2="Setting" />
                </div>
            </div>
        )
    }
}