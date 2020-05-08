## Bounce
跳动的音符

### method

- `setMusic(url)`
设置音乐

- `setGain(value)`
设置音量 value-min:0 max:1

- `stop()`
暂停

- `start()`
开始

## 使用(es6)

```js
import Bounce from 'Bounce'
const MUSIC_PATH = require('path/rythm1.mp3')
const bounce = new Bounce()
bounce.setMusic(MUSIC_PATH)
bounce.setGain(0.5)
bounce.start()

```