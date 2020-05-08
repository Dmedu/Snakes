/**
 * 播放器
 */
import Analyser from './analyser'
class Player {
    constructor(audioCtx) {
        this.audioCtx = audioCtx
        this.nodeGain = audioCtx.createGain()
        this.audio = {}
        this.source = {}
    }
    /**
     * @method 连接到源
     */
    nodeConnect = source => {
        source.connect(this.nodeGain)
        this.nodeGain.connect(Analyser.analyser)
        Analyser.analyser.connect(this.audioCtx.destination)
    }
    /**
     * @method 设置音乐
     * @param { string } url 地址
     */
    setMusic = url => {
        this.audio = new Audio()
        this.audio.src = url
        this.source = this.audioCtx.createMediaElementSource(this.audio)
        this.nodeConnect(this.source)
    }
    /**
     * @method 调节音量
     * @param { number } value 0-1
     */
    setGain = value => this.nodeGain.gain.value = value
    /**
     * @method 停止
     */
    stop = () => this.audio.pause()
    /**
     * @method 开始
     */
    start = () => {
        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume()
            .then(() => this.audio.play())
        } else {
            this.audio.play()
        }
    }
}

export default Player