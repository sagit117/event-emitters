export interface IEventEmittersStack {
    [key: string]: Function[]
}

export default class EventEmitters {
    /**
     * Подписка на событие
     * @param eventName - имя события
     * @param callback - функция, которая будет вызвана по активации события
     */
    public addListeners(eventName: string, callback: Function)

    /**
     * Сигнал к активации события
     * @param eventName - имя события
     * @param args - параметры
     */
    public emit(eventName: string, ...args: any)

    /**
     * Удаление слушателя
     * @param eventName
     * @param callback
     */
    public removeListener(eventName: string, callback: Function)
}
