import random from "random"

class Singleton {
    id = random.integer(0, 100)
}

const singleton = new Singleton()
export { singleton }