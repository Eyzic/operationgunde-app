class StopWatch {
    constructor() {
        this.startTime = null;
        this.stopped = true;
        this.interval = null;
        this.currentTime = 0;
        this.paused = true;
    }

    start() {
        if (this.stopped) {
            this.startTime = Date.now();
            this.stopped = false;
            this.paused = false;
            this.interval = setInterval(this._time.bind(this), 100);
        } else if (this.paused) {
            this.startTime = Date.now() - this.currentTime;
            this.paused = false;
            this.interval = setInterval(this._time.bind(this), 100);
        }
    };

    _time() { this.currentTime = Date.now() - this.startTime; }

    getRawTime() { return this.currentTime }
    getTime() { return formatTime(this.currentTime) }

    stop() {
        clearInterval(this.interval);
        this.stopped = true;
    }

    pause() {
        clearInterval(this.interval);
        this.paused = true;
    }

    isPaused() {
        return this.paused;
    }
}

const leftPad = (value, length) => value.toString().length < length ? leftPad("0" + value, length) : value;

function formatTime(time) {
    let hours = Math.floor((time / (60 * 60 * 1000) % 60));
    hours = leftPad(hours, 2);

    let minutes = Math.floor((time / (60 * 1000)) % 60);
    minutes = leftPad(minutes, 2);

    let seconds = Math.floor((time / 1000) % 60);
    seconds = leftPad(seconds, 2);

    let displayTime = hours + ":" + minutes + ":" + seconds;
    return displayTime;
}

export default StopWatch;