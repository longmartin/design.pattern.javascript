
function Promise(fn) {
	this.callback = []
	
    this.all = function() {
		
	}
	this.race = function() {
		
	}
	this.complete = function(type, result) {
		while(this.callback[0]) {
			this.callback.shift()[type](result)
		}
	}
	this.resolve = function(result) {
		this.complete('resolve', result)
	}
	this.reject = function(result) {
		this.complete('reject', result)
	}
    return this
}
Promise.prototype.then = function(successHandler) {
	this.callbacks.push({
        resolve: successHandler
    });
    return this;
}
Promise.prototype.catch = function(failHandler) {
	this.callbacks.push({
        reject: failedHandler
    });
    return this;
}