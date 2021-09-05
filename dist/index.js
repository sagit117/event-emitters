"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventEmittersClass {
    stackEmitters = {};
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
        if (eventName in this.stackEmitters) {
            this.stackEmitters[eventName].forEach((callback) => callback(...args));
        }
        else {
            throw new Error("Отсутствует событие");
        }
    }
    removeListener(eventName, callback) {
        if (eventName in this.stackEmitters) {
            const index = this.stackEmitters[eventName].findIndex((item) => item.toString() === callback.toString());
            if (index > -1)
                this.stackEmitters[eventName].splice(index, 1);
        }
    }
}
exports.default = EventEmittersClass;
