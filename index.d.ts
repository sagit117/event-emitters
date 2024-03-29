export interface IEventEmittersStack {
    [key: string]: Function[]
}

export default class EventEmitters {
    constructor(proto?: any)
    /**
     * Подписка на событие
     * @param eventName - имя события
     * @param callback - функция, которая будет вызвана по активации события
     */
    public addListeners(eventName: string, callback: Function): void

    /**
     * Сигнал к активации события
     * @param eventName - имя события
     * @param args - параметры
     */
    public emit(eventName: string, ...args: any): void

    /**
     * Удаление слушателя
     * @param eventName
     * @param callback
     */
    public removeListener(eventName: string, callback: Function): void
}
