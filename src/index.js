import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApiService from "./api";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import add from './imgs/add.png';
import subtract from './imgs/subtract.png';
import ok from './imgs/OK.png';
import './homepage.css';
// import Server from "./server";
//import { Component } from 'react';

const Welcome = ({ setDisplaySplashScreen }) => {
  const handleClick = () => {
    setDisplaySplashScreen(false);
  }
  return (
    <div>
      <div className='text'>
        <h1>Welcome to use 6000PCR Post Column Reactor </h1>
      </div>
      <div className='welcome-button'>
        <button
          className='start-btn'
          alt='start'
          onClick={handleClick} >
          Start
      </button>
      </div>
    </div>

  );
}

const Keyboard = () => {
  const [open, setOpen] = useState(false);
  const [enableKeyboard, setEnableKeyboard] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setEnableKeyboard(!enableKeyboard);
  }
  const handleClose = () => {
    setOpen(false);
    console.log(open);
  }
  return (
    <div>
      <IconButton aria-label="keyboard" className='kb-btn' onClick={handleOpen}>
        <KeyboardIcon fontSize="large" />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}>
        <DialogTitle className='text'>Keyboard {enableKeyboard ? 'Enabled' : 'Disabled'}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

const OperateButton = (props) => {
  return (
    <img src={props.img} alt={props.alt} />
  )
}

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
// const pumpInfo = new Server();

// const InfoDropdown = () => {
//   return (
//     <div className="info-dropdown">
//      <select id="infoDropdown" ref = {(input) => this.infoMenu = input} >
//       <option value="Please select" disabled selected hidden>Please select the code .</option>
//       <option value="1">CC*</option>
//       <option value="2">ID</option>
//       <option value="3">CS</option>
//       <option value="4">PI</option>
//   </select>
//     </div>
//   )
// }
// let info = this.infoMenu.value;
// const infoValue= ()=>{
//   let sel =document.getElementById('infoDropdown');
//   console.log ("sel is " + sel)
//   let sid = sel.selectedIndex;
//   let selValue = sel[sid].innerHTML;
//   return selValue;
// }
const InfoDropdown = ()=>{
  const[value, setValue] = useState('Please select');

const handleChange = e => {
    e.preventDefault();
    setValue(e.target.value);
  }
  const handleSubmit = e =>{
    console.log('Your choice is: ' + value);
    e.preventDefault();
    let submitValue = value;
    return submitValue;
  }
    return(
      <form className="info-dropdown" onSubmit ={handleSubmit}>
        <select value= {value} onChange={handleChange} >
       <option value="Please select" disabled selected hidden>Please select the code .</option>
       <option value="CC*">CC*</option>
      <option value="ID">ID</option>
       <option value="CS">CS</option>
       <option value="PI">PI</option>
   </select>
   <input type="submit" value="Submit" />
      </form>
    )
  }

const InfoScreen = () => {
  return (
    <div className = 'info-screen hide-infoscreen'>
      <p>Info Screen </p>
    </div>
  )
}
const SettingDropdown = () => {
  return (
    <div className="setting-dropdown" defaultValue={'DEFAULT'}>
      <select name="settingDropdown" >
        <option value="0" disabled selected hidden>Please select the code .</option>
        <option value="1">FL</option>
        <option value="2">FO</option>
        <option value="3">RU</option>
        <option value="4">ST</option>
        <option value="5">HI</option>
        <option value="6">PC</option>
        <option value="7">KD</option>
        <option value="8">KE</option>
        <option value="9">RE</option>
        <option value="10">#*</option>
      </select>
    </div>
  )
}

const Screen = ({ displayValue, displayDropdownType }) => {

  if (displayDropdownType) {
    return (
      <div>
        <p>{displayValue}</p>
        <InfoDropdown />
      </div>
    )
  } else {
    return (
      <div>
        <p>{displayValue}</p>
        <SettingDropdown />
      </div>
    )
  }
}

const ControlPanelButtons1 = (props) => {
  return (
    <div className='panel'>
      <ThemeProvider theme={theme}>
        <Button variant="outlined" size="large" color="secondary" onClick={props.click1} >{props.text1}<sub className={props.state1 ? "red-flashing" : "red-flash-hide"}></sub></Button>
        <Button variant="outlined" size="large" color="secondary" onClick={props.click2}>{props.text2}<sub className={props.state2 ? "red-flashing" : "red-flash-hide"}></sub></Button>
      </ThemeProvider>
    </div>
  )
}

const ControlPanelButtons2 = (props) => {
  return (
    <div className='panel'>
      <ThemeProvider theme={theme}>
        <Button variant="outlined" size="large" color="secondary" onClick={props.click1} >{props.text1}</Button>
        <Button variant="outlined" size="large" color="secondary" onClick={props.click2}>{props.text2}</Button>
      </ThemeProvider>
    </div>
  )
}

const ControlPanel = ({ setDisplayDropdownType,  setInfoScreenVisible }) => {
  const [open, setOpen] = useState(false);
  const [rs, setRs] = useState(false);
  const [prime, setPrime] = useState(false);

  useEffect(() => {
    console.log("1 OPEN")
  }, [open])

  const handleOpen = () => {
    setOpen(!open)
  }

  const rsClick = () => {
    setRs(!rs);
  }

  const primeClick = () => {
    setPrime(!prime);
  }
  const infoClick = () => {
    setDisplayDropdownType(true);
    setInfoScreenVisible(false);
  }
  const settingClick = () => {
    setDisplayDropdownType(false);
    setInfoScreenVisible(false);
  }
  return (
    <div className='controlpanel'>
      <div>

        <ControlPanelButtons1 className='panel-up' state1={rs} text1="R/S" click1={rsClick} state2={prime} text2="Prime" click2={primeClick} />

      </div>
      <div className='operator'>
        <div className='add-sub'>
          <OperateButton img={add} alt="add" ></OperateButton>
          <OperateButton img={subtract} alt="subtract"></OperateButton>
        </div>
        <div className='ok' onClick={handleOpen}>
          <OperateButton img={ok} alt="ok"></OperateButton>
        </div>
      </div>
      <ControlPanelButtons2 text1="Information" click1={infoClick} text2="Setting" click2={settingClick} />
    </div>
  )
}
const apiService = new ApiService()

const Homepage = ({ api }) => {
  const [displayDropdownType, setDisplayDropdownType] = useState(true)
  const [infoScreenVisible, setInfoScreenVisible] = useState(false)
  return (
    <div className='whole'>
      <div>
        <div className={`screen`}>
          <Screen displayValue={api.getInfo()} displayDropdownType={displayDropdownType}></Screen>
          <InfoScreen infoScreenVisible = {infoScreenVisible} />
        </div>
        <div>
          <Keyboard className='keyboard'></Keyboard>
        </div>
      </div>
      <ControlPanel setDisplayDropdownType={setDisplayDropdownType} setInfoScreenVisible = {setInfoScreenVisible} />
    </div>

  )
}

const App = () => {

  const [displaySplashScreen, setDisplaySplashScreen] = useState(true)

  if (displaySplashScreen) {
    return <Welcome setDisplaySplashScreen={setDisplaySplashScreen} />
  } else {
    return (
      <div>
        <Homepage api={apiService} />
      </div>
    )
  }
}

ReactDOM.render((
  <App />
), document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
