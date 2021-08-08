export default class EventEmittersClass {
    constructor() {
        this.stackEmitters = {};
    }
    addListeners(eventName, callback) {
        if (eventName in this.stackEmitters) {
            const findEmit = this.stackEmitters[eventName].find((item) => item.toString() === callback.toString());
            if (!findEmit) {
                this.stackEmitters[eventName].push(callback);
            }
        }
        else {
            this.stackEmitters[eventName] = [callback];
        }
    }
    emit(eventName, ...args) {
        this.stackEmitters[eventName].forEach((callback) => callback(...args));
    }
    removeListener(eventName, callback) {
        if (eventName in this.stackEmitters) {
            const index = this.stackEmitters[eventName].findIndex((item) => item.toString() === callback.toString());
            if (index > -1)
                this.stackEmitters[eventName].splice(index, 1);
        }
    }
}
