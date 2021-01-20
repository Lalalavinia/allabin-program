let Server = {
    "CC*": 'OK, 0, 0.01 to 9.99 mL/min for 10 mL head/',
    ID: '1.23/',
    FL: '0.01 to 9.99 OK/',
    "FO*": '03.50 OK/',
    RU: 'OK/',
    ST: 'OK/',
    "CS*": ['OK 01.05, 0, 0, PSI,0,1/','OK 01.25, 0, 0, ATM,0,1/','OK 8.93, 1, 1, PSI,0,1/','OK 3.15, 1, 0, PSI,1,1/','OK 9.98 1, 1, KGC, 0, 1/'],
    PI: ['OK 3.59,20, 1, 0,1,1,1,1,1,1,1,1,1,1/','OK 5.42,20, 1, 0,1,1,1,0,1,0,1,1,1,1/','OK 6.78, 2, 0,0,1,1,1,1,1,0,1,1,1/','OK 8.99,20, 3, 0,1,1,1,1,1,0,0,1,1,1/','OK 3.78,20, 4, 0,1,1,1,1,1,0,1,0,1,1/'],
    "HI,1": 'OK/',
    "HI,2": 'OK/',
    "HI,3": 'OK/',
    "HI,4": 'OK/',
    "PC,xx": 'OK/',
    KD: 'OK',
    KE: 'OK',
    RE: 'OK',
    "#*": "cleared",

    
    input: function (command) {
        if (command === "CS*" || command === "PI") {
            let num = Math.floor(Math.random()*5);  
            return(Server[command][num]);
        }
        else if (command.indexOf("HI") === 0) {
            let num = command.replace(/[^\d]/g,' ');
            console.log(num);
            return Server[command];
        }
        else if (command.indexOf("PC") === 0) {
            let num = command.replace(/[^\d]/g,' ');
            console.log(num);
            return Server["PC,xx"];
            
        }
        else
        return Server[command];
    }
}
module.exports = Server;