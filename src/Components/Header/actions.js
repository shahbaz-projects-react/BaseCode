/**How we write actions */
// const INCREMENT = 'counter/increment'
// function increment(amount: number) {
//   return {
//     type: INCREMENT,
//     payload: amount,
//   }
// }
// const action = increment(3)
import { createAction } from "@reduxjs/toolkit"
/**How we can use createAction */
// function createAction(type, prepareAction?)
// const increment = createAction('counter/increment')
// let action = increment()
// // { type: 'counter/increment' }
// action = increment(3)
// // returns { type: 'counter/increment', payload: 3 }
/**Customizing createAction
 * const addTodo = createAction('todos/add', function prepare(text) {
  return {
    payload: {
      text,
      id: nanoid(),
      createdAt: new Date().toISOString(),
    },
  }
})
 */

export const OPEN_DRAWER = createAction("OPEN_DRAWER")
export const ACTION = createAction("ACTION")
