import Player from './player'
import Analyser from './analyser'
import GraphRender from './graphRender'
class Bounce{
    constructor(){
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)()
        this.player = new Player(this.audioCtx)
        Analyser.init(this.audioCtx.createAnalyser())
        this.analyser = Analyser
        this.graphRender = GraphRender
        this.animationFrameRequest = void 0
    }
    /**
     * @method 设置音乐
     * @param { string } url 音乐地址
     */
    setMusic = url => this.player.setMusic(url)
    /**
     * @method 暂停
     */
    stop = () => this.player.stop()
    /**
     * @method 开始
     */
    start = () => {
        // 播放
        this.player.start()
        // 渲染图形
        // this.graphRender.aaa()
        this.graphRender.init()
        this.graphRender.renderGraph()
    }
    /**
     * @method 设置音量
     * @param { string } value 0-1
     */
    setGain = value => this.player.setGain(value)
}

export default Bounce