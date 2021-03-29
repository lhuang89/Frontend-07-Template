const TICK = Symbol("tick");
const TICK_HANDLER = Symbol("tick-handler");

export class Timeline {
    constructor(){
        this[TICK] = ()=>{
            console.log("tick");
            requestAnimationFrame(this[TICK]);
        }
    }

    start(){

    }

    pause(){

    }

    /*
    set rate(){

    }

    get rate(){

    }*/

    resume(){


    }

    reset(){}
}

export class Animation {
    constructor(object, property, startValue, endValue, duration, timingFunction){

    }
}