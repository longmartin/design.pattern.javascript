//事件，发布订阅并不是异步模式

var PubSub = {
    handlers: {}
}

PubSub.on = function(eventType, handler) {
    if(!(eventType in this.handlers)) {
        this.handlers[eventType] = []
    }
    this.handlers[eventType].push(handler)
    return this 
}

PubSub.emit = function(eventType) {
    var handlerArgs = [].protoType.slice.call(arguments, 1)
    for(var i = 0; i < this.handlers[eventType].length; i++) {
        this.handlers[eventType][i].apply(this, handlerArgs);
    }
    return this;
}

PubSub.off = function(eventType, handler) {
    if(!(eventType in this.handlers)) { 
        return
    }    
    if(handler == undefined) {
        delete this.handlers[eventType]
    }
    var index = this.handlers[eventType].indexOf(handler)    
    if(index !== -1) {
        this.handlers[eventType].splice(index, 1)
    }
    return this
}

export Module.PubSub = PubSub; 