/* eslint-disable @typescript-eslint/no-explicit-any */
// import { matcherHint, printReceived, printExpected, } from "jest-matcher-utils"

// function predicate<T>(expected: any) {
/* function checkType<T>(expected: any) {
  try {
    const temp = expected as T
    console.log(temp)
    return true
  } catch (error) {
    return false
  }
} */
/* 
const passMessage = (received: any) => () =>
  `${matcherHint(".not.toBeType", "received", "")} 

  Expected value to not be of type ? received
  ${printReceived(received)}`

const failMessage = (received: any) => () =>
  `${matcherHint(".toBeType", "received", "")}

  Expected value to be of type ?:
  ${printExpected("type of ?")}
  Received:
  ${printReceived(typeof received)}`

function toBeType<T>(
    this: jest.MatcherContext,
    expected: any
) {
    const pass = predicate<T>(expected)
    if (pass) {
        return { pass: true, message: passMessage(expected) }
    }

    return { pass: false, message: failMessage(expected) }
}
 */
