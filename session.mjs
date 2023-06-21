import { timer } from './timer.mjs';

export function session(sessionName,sessionTime){  
    this.sessionName = sessionName;  
    this.sessionTime = sessionTime;  
    this.timer = new timer(sessionTime);
    
    //sessionStart function to start the count down timer for the session
    this.sessionStart = function (seconds, callback){  
        if (seconds < 0) {
            console.log("\"" + sessionName + "\"" + " session countdown complete!");
            if (callback) {
              callback();
            }
          } else {
            console.log(seconds);
            setTimeout(() => {
                this.sessionStart(seconds - 1, callback);
            }, 1000);
          }
    }; 

    //getSessionTime function to get the duration for this session
    this.getSessionTime = function (){  
        return this.sessionTime;
    }; 

    //getSessionName function to get the name for this session
    this.getSessionName = function (){  
        return this.sessionName;
    };
} 