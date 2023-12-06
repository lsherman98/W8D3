class Clock {
    constructor() {
        this.date = new Date(Date.now());
        this.hours = (this.date).getHours()
        this.minutes = (this.date).getMinutes()
        this.seconds = (this.date).getSeconds()

        this.printTime()
        setInterval(() => {
            this._tick()
        }, 1000)
    //   1. Create a Date object.
    //   2. Store the hours, minutes, and seconds.
    //   3. Call printTime.
    //   4. Schedule the tick at 1 second intervals.
    }

    printTime() {
        console.log(`${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}`)
    //   Format the time in HH:MM:SS
    //   Use console.log to print it.
    }

    _tick() {
        this.seconds ++;

        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes ++;
            if (this.minutes === 60) {
                this.minutes = 0;
                this.hours ++;
            }
        }
        this.printTime()
    //   1. Increment the time by one second.
    //   2. Call printTime.
    }

};
const clock = new Clock();
