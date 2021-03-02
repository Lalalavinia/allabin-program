
let Server = class{
    constructor(){
    this.flowRate = parseFloat((Math.random() * 9.9).toFixed(2));
    this.pumpType = ['0.01 to 9.99', '0.01 to 40.0'][Math.round(Math.random())];
    this.pumpHeadType = Math.round(Math.random());
    this.pumpHeadMaterial = Math.ceil(Math.random() * 4);
    this.runState = 0;
    this.unit = ['PSI', 'ATM', 'MPA', 'BAR', 'KGC'][Math.floor(Math.random() * 4)];
    this.pressure = (Math.floor(Math.random() * 10)) * 500;
    this.pc = this.pressure/100;
    this.highPressureLimit = 3000;
    this.lowPressureLimit = 500;
    this.pressureBoard = Math.round(Math.random());
    this.controlMethod = Math.round(Math.random());
    this.pumpPriming = 0;
    this.pumpStartsWithFrequency = 0;
    this.pumpStartsWithVoltage = 0;
    this.highPressureWarning = 0;
    this.lowPressureWarning = 0;
    this.keyboardAblility = 0;
    this.externalPUMPRUN = Math.round(Math.random());
    this.externalPUMPSTOP = Math.round(Math.random());
    this.externalENABLEIN = Math.round(Math.random());
    this.powerState = 0;
    this.decidesPSCM(this.controlMethod, this.runState);
    this.limitWarning(this.pressure, this.highPressureLimit, this.lowPressureLimit);
    }


   decidesPSCM(controlMethod, runState) {
        if (controlMethod === 0 && runState === 1) {
            this.pumpStartsWithFrequency = 1;
        } else {
            this.pumpStartsWithFrequency = 0;
        }
        if (controlMethod === 1 && runState === 1) {
            this.pumpStartsWithVoltage = 1;
        } else {
            this.pumpStartsWithVoltage = 0;
        }
    };

    limitWarning(pressure, highPressureLimit, lowPressureLimit) {
        if (pressure > highPressureLimit) {
            this.highPressureWarning = 1;
        } else {
            this.highPressureWarning = 0;
        }
        if (pressure < lowPressureLimit) {
            this.lowPressureWarning = 1;
        } else {
            this.lowPressureWarning = 0;
        }
    };

    input(command) {
        if (command === "CC*") {
            return ("Pump condition: 0, \nFlowrate: " + this.flowRate + " /");
        }

        else if(command === "ID") {
            return "Pump type: " + this.pumpType + " /";
        }

        else if (command.includes("FL")) {
            let num = parseFloat(command.match(/\d+\.*\d*$/g));
            this.flowRate = num;
            return ' OK/';
        }

        else if (command.includes("FO")) {
            let num = parseFloat(command.match(/\d+\.*\d*$/g));
            this.flowRate = num;
            return 'OK/';
        }

        else if (command === "RU") {
            this.runState = 1;
            return 'OK/';
        }

        else if (command === "ST") {
            this.runState = 0;
            return 'OK/';
        }

        else if (command === "CS") {
            return  ("Flowrate: " + this.flowRate + '\nPSI: ' + this.unit  +"\nPump head type: "+ this.pumpHeadType +"\nRun state: "+ this.runState + " /" ); 
        }

        else if (command === "PI") {
            return ("Flowrate: "+ this.flowRate 
            +"  Pressure compensation: " +this.pc 
            +"\nHead type: " + this.pumpHeadMaterial 
            +"  Pressure board: " + this.pressureBoard 
            +"  Control: " +this.controlMethod 
            +"\nPump start with Frequency controlled: "+this.pumpStartsWithFrequency 
            +"\nPump start with Voltage controlled: "+this.pumpStartsWithVoltage 
            +"\nHigh pressure warning: "+this.highPressureWarning 
            +"\nLow pressure warning :"+this.lowPressureWarning 
            +"\nPump priming :"+this.pumpPriming 
            +"\nKeyboard ability: "+ this.keyboardAblility
            +"\nExternal PUMPRUN: " +this.externalPUMPRUN 
            +"\nExternal PUMPSTOP: "+ this.externalPUMPSTOP
            +"\nExteral ENABLEIN: "+ this.externalENABLEIN + ' /')
    
        }

        else if (command.includes("HI")) {
            let num = parseInt(command.replace(/[^\d]/g, ''));
            this.pumpHeadMaterial = num;
            return 'OK/';
        }

        else if (command.includes("PC")) {
            let num = parseInt(command.replace(/[^\d]/g, ''));
            console.log(num);
            this.pc = num;
            return 'OK/';
        }

        else if (command === "KD") {
            this.keyboardAblility = 1;
            return 'OK/';
        }

        else if (command === "KE") {
            this.keyboardAblility = 0;
            return 'OK/';
        }

        else if (command === "RE") {
            this.powerState = 1;
            return 'OK/';
        }

        else if (command === "#*") {
            console.clear();
        }
        else{
            return "  "
        }
    }
}
export default Server;