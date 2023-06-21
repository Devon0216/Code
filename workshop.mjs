import { session } from './session.mjs';



export function workshop(numSessions,numParticipants){  
    this.numSessions = numSessions;  
    this.numParticipants = numParticipants;  
    this.sessions = [];
    
    //addSessions function to add a session to the workshop
    this.addSessions =  function (sessionName,sessionTime){  
        this.sessions.push(new session(sessionName,sessionTime));
    };

    //removeSessions function to remove a session from the workshop
    this.removeSessions = function (sessionIndex){  
        this.sessions.splice(sessionIndex,1);
    };   

    //startWorkshop function to start the session countdowns
    this.startWorkshop = function (sessionIndex){ 
        if (sessionIndex >= this.numSessions) {
            console.log("All sessions completed!");
            return;
        }
        
        const countdownTime = this.sessions[sessionIndex].getSessionTime();
        console.log("\"" + this.sessions[sessionIndex].getSessionName() + "\"" + " session countdown start!");
        this.sessions[sessionIndex].sessionStart(countdownTime, () => {
            this.startWorkshop(sessionIndex + 1);
        });
    };
} 