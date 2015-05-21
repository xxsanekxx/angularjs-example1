# Angular project

### Installation

You need Sass installed globally:

http://sass-lang.com/install
I recommend use libsass https://github.com/sass/libsass

You need Grunt installed globally:

```sh
$ npm install -g grunt
```

```sh
$ git clone git@github.com:xxsanekxx/angularjs-example1.git example
$ cd example
$ npm install
$ bower install
$ grunt dev
```
Способы чтобы получить данные пока так:
1. Просто константой, но при таком менять и на фронте придется код, если добавиться или поменяются настройки
```javascript
exampleApp.constant("config", {
    "api": {
        "monitoring": {
            "port": 8000
        },
        "admin": {
            "port": 8001
        },
        "trading": {
            "port": 8002
        }
    }
});
```
2. Добавляем в апи бек-енда новый контроллер(демон) на роутер '/configs' со своим портом и перед инициализацией приложения получаем сначало эти данные по апи, а потом уже работаем по этим url
 Тут в ангуляре нашел только несколько способов

    2.1 Сначало фетчим конфиг, потом бутсрапим приложение
    ```javascript
    angular.bootstrap(document, ["exampleApp"]);
    ```
    
    2.2 Еще через $routeProvider и resolve
    Пример: http://stackoverflow.com/questions/16286605/initialize-angularjs-service-with-asynchronous-data
  
  Было бы не плохо в run чтобы было асинхронность, https://github.com/angular/angular.js/issues/4003 но пока нету

3. При рендере, например, добавлять в ```<script></script>``` настройки.
