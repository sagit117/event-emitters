import EventEmitters, { IEventEmittersStack } from "./index.d";

/**
 * Базовый класс для создания прослушиваемых событий
 */
export default class EventEmittersClass implements EventEmitters {
    private stackEmitters: IEventEmittersStack = {}

    /**
     * Подписка на событие
     * @param eventName - имя события
     * @param callback - функция, которая будет вызвана по активации события
     */
    public addListeners(eventName: string, callback: Function) {
        if (eventName in this.stackEmitters) {
            const findEmit = this.stackEmitters[eventName].find(
                (item) => item.toString() === callback.toString()
            )

            if (!findEmit) {
                this.stackEmitters[eventName].push(callback)
            }
        } else {
            this.stackEmitters[eventName] = [callback]
        }
    }

    /**
     * Сигнал к активации события
     * @param eventName - имя события
     * @param args - параметры
     */
    public emit(eventName: string, ...args: any) {
        if (eventName in this.stackEmitters) {
            this.stackEmitters[eventName].forEach((callback) => callback(...args));
        } else {
            throw new Error("Отсутствует событие");
        }
    }

    /**
     * Удаление слушателя
     * @param eventName
     * @param callback
     */
    public removeListener(eventName: string, callback: Function) {
        if (eventName in this.stackEmitters) {
            const index = this.stackEmitters[eventName].findIndex(
                (item) => item.toString() === callback.toString()
            )

            if (index > -1) this.stackEmitters[eventName].splice(index, 1)
        }
    }
}
