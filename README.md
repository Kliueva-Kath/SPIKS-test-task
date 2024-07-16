## Посмотреть проект

https://kliueva-kath.github.io/SPIKS-test-task/

## Команды

Запустить проект

```
npm run start
```

Собрать проект

```
npm run build
```

Задеплоить проект

```
npm run deploy
```

## Перегон токенов

- открыть папку tokens в терминале и вызвать

```
node exportTokens.js
```

- файл с переменными будет собран в config/scss/\_tokens.scss
- импортировать переменные в config/scss/index.scss

```
@forward "./tokens" as tokens-*;
```
