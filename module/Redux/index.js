/**
 * 状态机
 * @module createStore
 * @static
 * @author Ethan zhang
 * email : 610558983@qq.com
 * github : https://github.com/Dmedu
 */
const createStore = (yourReducer) => {
  let listeners = []
  let currentState = yourReducer(undefined, {})

  return {
    getState: () => currentState,
    dispatch: (action) => {
      currentState = yourReducer(currentState, action)

      listeners.forEach((listener) => {
        listener()
      })
    },
    subscribe: (newListener) => {
      listeners.push(newListener)

      const unsubscribe = () => {
        listeners = listeners.filter((l) => l !== newListener)
      }

      return unsubscribe
    }
  }
}

export default createStore