let element = document.documentElement;

let isListeningMouse = false;

element.addEventListener("mousedown", event =>{
    let context = Object.create(null);

    contexts.set("mouse"+ (1 << event.button), context);
    start(event, context);
    let mousemove = event=>{
        let button = 1;

        while (button <= event.buttons){
            if (button & event.buttons){
                // order of buttons and button property are not the same
                let key;
                if(button===2)
                    key=4;
                else if(button===4)
                    key=2;
                else
                    key=button;
                let context = contexts.get("mouse"+ key);
                move(event, context);
            }
            button = button << 1;
        }       
    };

    let mouseup = event => {
        let context = contexts.get("mouse"+ (1<<event.button));
        end(event, context);
        contexts.delete("mouse"+ (1<<event.button));

        if (event.buttons===0){
            document.removeEventListener("mousemove", mousemove);
            document.removeEventListener("mouseup", mouseup);
            isListeningMouse = false;
        }
    };

    if(!isListeningMouse){
        document.addEventListener("mousemove", mousemove);
        document.addEventListener("mouseup", mouseup);
        isListeningMouse = true;
    }
})


let contexts = new Map();

element.addEventListener("touchstart", event=>{
    for (let touch of event.changedTouches){
        let context = Object.create(null);
        contexts.set(touch.identifier, context);
        start(touch, context);
    }
})

element.addEventListener("touchmove", event=>{
    for (let touch of event.changedTouches){
        let context = contexts.get(touch.identifier, context);
        move(touch, context);
    }
})

element.addEventListener("touchend", event=>{
    for (let touch of event.changedTouches){
        let context = contexts.get(touch.identifier, context);
        end(touch, context);
        contexts.delete(touch.identifier);
    }
})

element.addEventListener("touchcancel", event=>{
    for (let touch of event.changedTouches){
        let context = contexts.get(touch.identifier, context);
        cancel(touch, context);
        contexts.delete(touch.identifier);
    
    }
})

let start = (point, context) => {
    //console.log("start", point.clientX, point.clientY);

    context.isPan = false;
    context.isTap = true;
    context.isPress=false;

    context.startX = point.clientX, context.startY = point.clientY;

    context.handler = setTimeout(()=>{
        context.isPan = false;
        context.isTap = false;
        context.isPress = true;
        context.handler = null;
        console.log("press");
    }, 500);

}

let end = (point, context) =>{

    if(context.isTap){
        console.log("tap");
        dispatch("tap", {});
        clearTimeout(context.handler);
    }

    if(context.isPan){
        console.log("panend");
    }

    if(context.isPress){
        console.log("press end");
    }

    //console.log("end", point.clientX, point.clientY);
}

let move = (point, context) =>{
    let dx = point.clientX - context.startX;
    let dy = point.clientY - context.startY;
    if (!context.isPan && dx ** 2 + dy ** 2 > 100){
        context.isPan = true;
        context.isTap = false;
        context.isPress = false;
        console.log("panstart");
        clearTimeout(context.handler);
    }

    if (context.isPan){
        console.log(dx, dy);
        console.log("pan");
    }
    //console.log("move", point.clientX, point.clientY);
}

let cancel = (point, context) =>{
    clearTimeout(context.handler);
    console.log("cancel", point.clientX, point.clientY);
}


function dispatch(type, properties){
    let event = new Event(type);
    for (let name in properties){
        event[name] = properties[name];
    }
    element.dispatchEvent(event);
    console.log(event);
}