/**
 * 事件监听器
 * @class events
 * @static
 * @author Ethan zhang
 * email : 610558983@qq.com
 * github : https://github.com/Dmedu
 */
class events{
    constructor(){
        this.obj = {};
    }
    /**
     * @method 注册监听器
     * @param { string } name 要注册的监听器名称
     * @param { function } fn 监听的函数
     */
    static on = async (name,fn) => {
        if(typeof fn === 'function'){
            if(!this.obj[name]){
                this.obj[name] = [];
            }
            this.obj[name].push(fn);
        }else{
            console.error(`Error : ${name} not a function`)
        }
        
    }
    /**
     * @method 触发监听器
     * @param { string } name 已注册的监听器名称
     * @param { any } value 注册函数接受的参数
     */
    static emit = (name,value) => {
        if(this.obj[name]){
            this.obj[name].map((fn,index,arr)=>{
                fn(value);
            })
        }else{
            console.error(`Error : ${name} This function does not exist`);
        }
    }
}

export default events;