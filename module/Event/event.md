## 事件监听器

### 方法

- on

注册监听器

- emit
    
触发监听器

## 例子

```js
import Events from './util';
Events.on('someEvent', (arg1, arg2)=> { 
    console.log('listener1', arg1, arg2); 
}); 
Events.on('someEvent', (arg1, arg2)=> { 
    console.log('listener2', arg1, arg2); 
}); 
Events.emit('someEvent', 'arg1 参数', 'arg2 参数'); 

//输出运行结果如下
listener1 arg1 参数 arg2 参数
listener2 arg1 参数 arg2 参数

```