## Реализация класса для модели слушатель - генератор событий

### Установка

> npm i event-emitters-class


### Подключение

```typescript
import EventEmittersClass from 'event-emitters-class'

/**
 * Отвечает за события активирующие бизнес-логику
 */
class BusinessLogicEmitters extends EventEmittersClass {}

export default new BusinessLogicEmitters()
```

```typescript
import BusinessLogicEmitters from 'BusinessLogicEmitters'

BusinessLogicEmitters.addListeners('onClickBtn', () => console.log('click btn'))
```

```typescript
import BusinessLogicEmitters from 'BusinessLogicEmitters'

BusinessLogicEmitters.emit('onClickBtn') // log click btn

// remove listener
BusinessLogicEmitters.removeListener('onClickBtn', () => console.log('click btn'))
```