let Server = {
    "CC*": 'OK, 0, 0.01 to 9.99 mL/min for 10 mL head',
    ID: '1.23',
    FL: '0.01 to 9.99 OK',
    "FO*": '0.01 to 9.99 OK',
    RU: 'OK',
    ST: 'OK',
    "CS*": 'OK 0.01 to 9.99 0,0,5(psi),0,1',
    PI: 'OK 0.01 to 9.99,20, 1, 0,1,1,1,1,1,1,1,1,1,1',
    "HI,x": 'OK',
    "PC,xx": 'OK',
    KD: 'OK',
    KE: 'OK',
    RE: 'OK',
    "#*": "cleared",


    input: function (command) {
        return Server[command];
    }
}
module.exports = Server;