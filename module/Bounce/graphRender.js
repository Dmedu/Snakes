/**
 * 图形渲染
 */
import Analyser from './analyser'

class GraphRender {
    constructor() {
        this.analyser = Analyser.analyser
        this.canvas = {}
        this.ctx = {}
        this.radius = 128
        this.itemNum = 180
        this.itemMinHeight = 2
        this.itemWidth = 5
    }
    init = () => {
        let canvas = document.getElementById('canvas')
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
    }
    renderGraph = () => {
        const CANVAS_W = this.canvas.width
        const CANVAS_H = this.canvas.height

        let array = Analyser.analyse()
        let step = Math.round(array.length / this.itemNum);

        console.log(array)

        this.ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
        this.ctx.save();
        this.ctx.translate(CANVAS_W / 2, CANVAS_H / 2);
        this.setGradientColor(0, -this.radius, 0, -CANVAS_W / 2)

        for (let i = 0; i < this.itemNum; i++) {
            let value = array[i * step];
            let itemHeight = value * (CANVAS_H / 2 - this.radius) / 512 || this.itemMinHeight;
            this.ctx.rotate(2 * Math.PI / this.itemNum);
            this.ctx.fillRect(-this.itemWidth, -this.radius - itemHeight, this.itemWidth, itemHeight);
        }

        this.ctx.restore();
        requestAnimationFrame(this.renderGraph);
    }
    /**
     * @method 设置渐变色填充
     * @param { number } x0 起点x轴坐标
     * @param { number } y0 起点y轴坐标
     * @param { number } x1 终点x轴坐标
     * @param { number } y1 终点y轴坐标
     */
    setGradientColor = (x0,y0,x1,y1) => {
        let gradient = this.ctx.createLinearGradient(x0, y0, x1, y1)
        gradient.addColorStop(0, '#0099FF')
        gradient.addColorStop(0.2, '#FFFFCC')
        gradient.addColorStop(0.4, '#666699')
        gradient.addColorStop(0.6, '#99CC33')
        gradient.addColorStop(0.8, '#CCCCCC')
        gradient.addColorStop(1, '#000000')
        this.ctx.fillStyle = gradient
    }
}

export default new GraphRender()