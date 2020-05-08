/**
 * 音频可视化分析
 */
class Analyser{
    constructor(){
        this.analyser = {}
        this.frequences = null
    }
    init = analyser => {
        this.analyser = analyser
        this.analyser.fftSize = 2048
    }
    analyse = () => {
        this.frequences = new Uint8Array(this.analyser.frequencyBinCount)
        this.analyser.getByteFrequencyData(this.frequences)
        return this.frequences
    }
}

export default new Analyser();