import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import './homepage.css';
import Server from "./server";

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
    <div className = 'kb-div'>
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

// const OperateButton = (props) => {
//   return (
//     <img src={props.img} alt={props.alt} />
//   )
// }

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

const InfoDropdown = ({ pumpInfo,infoScreenVisible, setInfoScreenVisible }) => {
  const [value, setValue] = useState('Please select');
    const handleChange = e => {
    e.preventDefault();
    setValue(e.target.value);
  }
  const handleSubmit = e => {
    setInfoScreenVisible(true);
    e.preventDefault();
  }
  return (
    <div>
      <form className="info-dropdown" onSubmit={handleSubmit}>
        <select value={value} onChange={handleChange} >
          <option value="Please select" disabled selected hidden>Please select the code .</option>
          <option value="CC*">CC*</option>
          <option value="ID">ID</option>
          <option value="CS">CS</option>
          <option value="PI">PI</option>
        </select>
        <input className = "OK-btn OK-1" type="submit" value="OK" />
      </form>
      <div className = 'mid-screen'>{infoScreenVisible ?  (<p className="text_inline">{pumpInfo.input(value)} </p> ):null }       
      </div>
    </div>
  )
}

const SettingDropdown = ({ pumpInfo, infoScreenVisible, setInfoScreenVisible}) => {
  const [inpValue,setInput] = useState(0.00);
  const handleChange = e => {
    e.preventDefault();
    setInput(e.target.value);
  }
  const handleSubmit = e => {
    console.log('Your choice is: ' + inpValue);
    setInfoScreenVisible(true);
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <p className = "text_title">Please input the code and value</p>
        <input type="text" onChange={handleChange} defaultValue={inpValue} onSubmit={handleSubmit} />
        <input className = "OK-btn OK-2" type="submit" value="OK" />
      </form>
      <div className = 'mid-screen'>{infoScreenVisible ?  (<p className="text_inline">{pumpInfo.input(inpValue)} </p> ):null }    
      </div>
    </div>
  )
}

const Screen = ({displayDropdownType, pumpInfo }) => {
  const [infoScreenVisible, setInfoScreenVisible] = useState(false);
  if (displayDropdownType) {
    return (
      <div>
        <p className = "text_inline">6000PCR Post Column Reactor</p>
        <InfoDropdown pumpInfo={pumpInfo} infoScreenVisible = {infoScreenVisible} setInfoScreenVisible = {setInfoScreenVisible}/>
      </div>
    )
  } else {
    return (
      <div>
        <p className = "text_inline">6000PCR Post Column Reactor</p>
        <SettingDropdown pumpInfo={pumpInfo} infoScreenVisible = {infoScreenVisible} setInfoScreenVisible = {setInfoScreenVisible}/>
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

const ControlPanel = ({ setDisplayDropdownType, pumpInfo }) => {
  // const [open, setOpen] = useState(false);
  const [rs, setRs] = useState(false);
  const [prime, setPrime] = useState(false);

  const rsClick = () => {
    setRs(!rs);
    if(rs === false){
      pumpInfo.runState = 1;
      console.log(pumpInfo.runState);
    } else{
      pumpInfo.runState = 0;
      console.log(pumpInfo.runState);
    }
  }

  const primeClick = () => {
    setPrime(!prime);
    if(prime === true){
      pumpInfo.pumpPriming = 0;
      console.log(pumpInfo.pumpPriming);
    } else{
      pumpInfo.pumpPriming = 1;
      console.log(pumpInfo.pumpPriming);
    }
  }
  const infoClick = () => {
    setDisplayDropdownType(true);
    // setInfoScreenVisible(false);
  }
  const settingClick = () => {
    setDisplayDropdownType(false);
    // setInfoScreenVisible(false);
  }
  return (
    <div className='controlpanel'>
      <div>
        <ControlPanelButtons1 className='panel-up' state1={rs} text1="R/S" click1={rsClick} state2={prime} text2="Prime" click2={primeClick} />
      </div>
      <div className='operator'>
      </div>
      <ControlPanelButtons2 text1="Information" click1={infoClick} text2="Setting" click2={settingClick} />
    </div>
  )
}

const pumpInfo = new Server();

const Homepage = ({pumpInfo, setInfoScreenVisible }) => {
  const [displayDropdownType, setDisplayDropdownType] = useState(true)
  // const [infoScreenVisible, setInfoScreenVisible] = useState(false)
  return (
    <div className='whole'>
      <div className={`screen`}>
        <div >
          <Screen displayDropdownType={displayDropdownType} pumpInfo={pumpInfo}></Screen>
        </div>
        <div>
          <Keyboard className='keyboard'></Keyboard>
        </div>
      </div>
      <ControlPanel setDisplayDropdownType={setDisplayDropdownType} setInfoScreenVisible={setInfoScreenVisible} pumpInfo = {pumpInfo} />
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
        <Homepage pumpInfo={pumpInfo} />
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
