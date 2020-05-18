/**
 * 函数防抖节流
 * @author Ethan Zhang
 * email : 610558983@qq.com
 * 2020/05/12
 */

class DebounceThrottle{
  constructor(){
    this.timer = null
    this.valid = true
  }
  /**
   * 某个时间期限（如1000毫秒）内，事件处理函数只执行一次
   * @method 函数防抖
   * @param { Function } fn 执行函数
   * @param { number } delay 延迟时间
   */
  debounce = (fn,delay) => {
    return ()=>{
      if(this.timer) clearTimeout(this.timer)
      this.timer = setTimeout(fn,delay)
    }
  }
  /**
   * 
   */
  throttle = () => {
    let prev = new Date().getTime()
    
  }
}
export default new DebounceThrottle()