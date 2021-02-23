class ApiService {

    constructor() {
        this.counter = 0
    }

    getInfo()  {
        return "PUMP 123 " + this.counter
    }

    handleClickOK() {
        this.counter += 1
    }
}

export default ApiService