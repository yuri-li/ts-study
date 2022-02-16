import random from "random"
class Singleton {
    randomNumber = random.int(1, 100)
}
const singleton = new Singleton()
export { singleton }