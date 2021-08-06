"use strict";
exports.__esModule = true;
/**
 * Базовый класс для создания прослушиваемых событий
 */
var EventEmittersClass = /** @class */ (function () {
    function EventEmittersClass() {
        this.stackEmitters = {};
    }
    /**
     * Подписка на событие
     * @param eventName - имя события
     * @param callback - функция, которая будет вызвана по активации события
     */
    EventEmittersClass.prototype.addListeners = function (eventName, callback) {
        if (eventName in this.stackEmitters) {
            var findEmit = this.stackEmitters[eventName].find(function (item) { return item.toString() === callback.toString(); });
            if (!findEmit) {
                this.stackEmitters[eventName].push(callback);
            }
        }
        else {
            this.stackEmitters[eventName] = [callback];
        }
    };
    /**
     * Сигнал к активации события
     * @param eventName - имя события
     * @param args - параметры
     */
    EventEmittersClass.prototype.emit = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.stackEmitters[eventName].forEach(function (callback) { return callback.apply(void 0, args); });
    };
    /**
     * Удаление слушателя
     * @param eventName
     * @param callback
     */
    EventEmittersClass.prototype.removeListener = function (eventName, callback) {
        if (eventName in this.stackEmitters) {
            var index = this.stackEmitters[eventName].findIndex(function (item) { return item.toString() === callback.toString(); });
            if (index > -1)
                this.stackEmitters[eventName].splice(index, 1);
        }
    };
    return EventEmittersClass;
}());
exports["default"] = EventEmittersClass;
