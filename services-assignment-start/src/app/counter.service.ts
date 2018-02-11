export class CounterService {
    setToActiveCounter: number = 0;
    setToInactiveCounter: number = 0;

    constructor() {

    }

    setToActive() {
        this.setToActiveCounter++;
        console.log('Times users set to active: ' + this.setToActiveCounter);
    }

    setToInactive() {
        this.setToInactiveCounter++;
        console.log('Times users set to inactive: ' + this.setToInactiveCounter);
        
    }
}