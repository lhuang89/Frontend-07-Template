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

    set rate(){

    }

    get rate(){

    }

    resume(){


    }

    reset(){}
}