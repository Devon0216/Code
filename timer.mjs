/*
function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the string with leading zeroes
    const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    console.log(clockStr);
}

updateTime();
setInterval(updateTime, 1000);
*/

export function timer(sessionSeconds){  
    this.sessionSeconds = sessionSeconds;  
    this.endSeconds = new Date().setSeconds(new Date().getSeconds() + this.sessionSeconds);  
    
    //countdown function to start the count down process
    this.countdown = countdown;
    function countdown(){  
        console.log("in countdown")
        const now = new Date().getTime();
        const end = new Date(this.endSeconds).getTime();
        const duration = Math.ceil((end - now) / 1000);

        if (duration == 0) {
            console.log(-duration);
            console.log("Current session ended");
        }
        else{
            console.log(duration);
        }

        return duration;
    }
    
}  