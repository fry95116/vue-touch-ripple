[![GitHub issues](https://img.shields.io/github/issues/surmon-china/vue-touch-ripple.svg?style=flat-square)](https://github.com/surmon-china/vue-touch-ripple/issues)
[![GitHub forks](https://img.shields.io/github/forks/surmon-china/vue-touch-ripple.svg?style=flat-square)](https://github.com/surmon-china/vue-touch-ripple/network)
[![GitHub stars](https://img.shields.io/github/stars/surmon-china/vue-touch-ripple.svg?style=flat-square)](https://github.com/surmon-china/vue-touch-ripple/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/surmon-china/vue-touch-ripple/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/surmon-china/vue-touch-ripple.svg?style=social?style=flat-square)](https://twitter.com/intent/tweet?url=https://github.com/surmon-china/vue-touch-ripple)

[![NPM](https://nodei.co/npm/vue-touch-ripple.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-touch-ripple/)
[![NPM](https://nodei.co/npm-dl/vue-touch-ripple.png?months=9&height=3)](https://nodei.co/npm/vue-touch-ripple/)


# Vue-Touch-Ripple
Touch ripple component for Vue.js(1.x ~ 2.x).

组件component/指令directive两种方法可供使用，灵活简单，兼容Vue.js全版本。


- 要注意的地方：

  * 使用directive模式时，组件会给所对应元素内部append子节点，如果是p、tr、img、Input...这些标签由于浏览器不支持再内嵌元素，故将会失效，所以刚才所述的单标签或者一些特殊的不允许内部插入元素的行内元素，在使用时需使用component方式

  * 使用component模式时，组件会在外层自动包裹div，div默认是block的，且本质上已经改变了外层dom结构，如果需要的话，可以通过给组件加class来用css改变其成为指定的盒子类型，如：

    ``` html
    <touch-ripple class="inline">
       <button>it's a button</button>
    </touch-ripple>
    ```

    ``` css
    .inline {
      display: inline-block;
    }
    ```

  * 推荐directive模式使用，在directive模式失效时，改用component模式


# Example
[Demo Page](https://surmon-china.github.io/vue-touch-ripple/)


# Use Setup


### Install vue-touch-ripple

``` bash
npm install vue-touch-ripple
```


### Mount with vue

``` javascript
// import
import Vue from 'vue'
import VueTouchRipple from 'vue-touch-ripple'


// or require
const Vue = require('vue')
const VueTouchRipple = require('vue-touch-ripple')


// mount with global
Vue.use(VueTouchRipple)


// or mount with compoment
import Vue from 'vue'
import { touchRipple } from 'vue-touch-ripple'

export default {
  components: {
    touchRipple
  }
}
```

``` html
<!-- use with components -->
<touch-ripple>
   <!-- your code... -->
   <h1>it's a h1 title</h1>
   <div>it's a div block</div>
</touch-ripple>


<!-- use with directive(must be global Vue.use(VueTouchRipple)) -->
<button v-touch-ripple>check me!</button>
<h1 v-touch-ripple>I'm h1!</h1>
<div v-touch-ripple>I'm div!</div>
```


# Author Blog
[Surmon](https://surmon.me)
