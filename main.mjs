import { workshop } from './workshop.mjs';

/**
    *******************************************************************
    count down loop
    *******************************************************************
**/

let numSessions = 2;
let numParticipants = 2;

let theWorkshop = new workshop(numSessions,numParticipants);
theWorkshop.addSessions("start",5);
theWorkshop.addSessions("end",10);

theWorkshop.startWorkshop(0);