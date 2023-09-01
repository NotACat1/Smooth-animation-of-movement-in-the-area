# Плавная анимация передвижения по области

![main](https://github.com/NotACat1/Smooth-animation-of-movement-in-the-area/assets/113008873/c1f1e5d2-a955-4eec-815a-b321b4e38af3)

## О проекте

Этот веб-сайт иллюстрирует творческий способ предоставления обширного набора карточек, предоставляя пользователю возможность свободно перемещаться по пространству. Такой подход придает уникальный опыт взаимодействия с контентом и способствует более увлекательному восприятию информации.

Идея взята с видеоурока: [https://youtu.be/kyoTYFTLm8A?si=M7kOLbUq7LPy-uMX](https://youtu.be/kyoTYFTLm8A?si=M7kOLbUq7LPy-uMX).

## Реализованный функционал

### 1. Прелоадер

Прелоадер на данном сайте скрывает контент от пользователя до тех пор, пока все изображения не будут загружены. Это позволяет обеспечить более плавное и приятное восприятие сайта, так как пользователь не видит "моргающих" или недозагруженных элементов и может начать взаимодействие с контентом только после полной готовности страницы.

### 2. Передвижение по области

Главной особенностью данного сайта является возможность перемещения пользователя по области с использованием мыши, при этом открываются новые карточки. Этот инновационный способ навигации делает взаимодействие с контентом более интерактивным и увлекательным, предоставляя уникальный опыт для каждого пользователя.

### 3. Темная тема

На данном сайте реализована автоматическая смена темы на темную с использованием CSS. Этот функционал позволяет сайту адаптироваться к окружающей освещенности или предпочтениям пользователя, автоматически переключаясь между светлой и темной темой в зависимости от настроек браузера.

## Используемые технологии

### 1. GSAP

[GSAP](https://greensock.com/gsap/), или GreenSock Animation Platform, это мощная библиотека JavaScript для создания анимаций на веб-сайтах. Она предоставляет разработчикам инструменты и функции для создания сложных и интерактивных анимаций с легкостью.

#### 1.1 Draggable

[GSAP Draggable](https://greensock.com/draggable/) - это часть библиотеки GreenSock Animation Platform (GSAP), которая предоставляет возможность добавления перетаскиваемых функций к элементам на веб-странице. Эта часть GSAP позволяет создавать интерактивные и многие другие вещи, такие как перетаскиваемые объекты, слайдеры, карусели и даже более сложные интерфейсы.

#### 1.2 InertiaPlugin

[GSAP InertiaPlugin](https://greensock.com/gsap/) - это дополнение (плагин) к библиотеке GreenSock Animation Platform (GSAP), которое добавляет поддержку инерции при анимации объектов. Этот плагин позволяет создавать более реалистичные и естественные анимации, которые имитируют движение объектов после завершения пользовательского взаимодействия, такого как перетаскивание или скроллинг.

### 2. Normalize.css

[Normalize.css](https://necolas.github.io/normalize.css/) предоставляет браузерам возможность более последовательного отображения всех элементов согласно современным стандартам. Он акцентируется на нормализации только тех стилей, которые действительно требуют коррекции.

```css
/* index.css */
@import url(../vendor/normalize.css);
```

### 3. Webpack

[Webpack](https://webpack.js.org/) - это инструмент с открытым исходным кодом для сборки веб-приложений. Он позволяет объединять различные файлы, такие как HTML, CSS, JavaScript, изображения, в единый пакет для оптимизированной доставки на веб-сервер. Webpack также поддерживает использование различных загрузчиков и плагинов, что облегчает процесс разработки, минимизации и управления зависимостями.

Настройки Webpack:

```js
// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/pages/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    port: 8080
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
        generator: {
            filename: 'images/[name].[hash][ext]',
          }
      },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
      generator: {
            filename: 'fonts/[name].[hash][ext]',
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),

  ]
}
```

#### 3.1 Babel

[Babel](https://babeljs.io/) - это инструмент для транспиляции кода на JavaScript. Он позволяет разработчикам писать код, используя современные функции языка, которые могут быть не поддержаны всеми браузерами. Babel преобразует этот код в совместимый с более старыми версиями браузеров, обеспечивая кросс-браузерную поддержку и совместимость.

Настройки Babel:

```js
// babel.config.js
const presets = [
  ['@babel/preset-env', {
    targets: {
      edge: '17',
      ie: '11',
      firefox: '50',
      chrome: '64',
      safari: '11.1'
    },
    useBuiltIns: "entry"
  }]
];
module.exports = { presets };
```

#### 3.2 PostCSS

[PostCSS](https://postcss.org/) - это инструмент для обработки и трансформации кода CSS. Он позволяет разработчикам применять различные плагины к CSS коду, автоматизируя задачи, такие как автопрефиксинг, оптимизация, генерация переменных и многое другое. PostCSS гибкий и настраиваемый, что позволяет адаптировать его под конкретные потребности проекта.

Настройки PostCSS:

```js
// postcss.config.js
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
module.exports = {
  plugins: [
    autoprefixer,
    cssnano({ preset: 'default' })
  ]
};
```
