## Реализация класса для модели слушатель - генератор событий

### Установка

> npm i event-emitters-class


### Подключение

```typescript
import EventEmittersClass from 'event-emitters-class'

/**
 * Отвечает за события активирующие бизнес-логику
 * Прототип необходимо передавать если функции слушатели должны выполняться в контексте
 */
class BusinessLogicEmitters extends EventEmittersClass {
    constructor(proto?: any) {
        super(proto);
    }
}

export default new BusinessLogicEmitters()
```

```typescript
import BusinessLogicEmitters from 'BusinessLogicEmitters'

BusinessLogicEmitters.addListeners('onClickBtn', (params) => console.log('click btn id:', params.id))
```

```typescript
import BusinessLogicEmitters from 'BusinessLogicEmitters'

BusinessLogicEmitters.emit('onClickBtn', { id: 1 }) // log > click btn id: 1

// remove listener
BusinessLogicEmitters.removeListener('onClickBtn', (params) => console.log('click btn id:', params.id))
```