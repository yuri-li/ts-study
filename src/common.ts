const nullableString: string | null = null
const nullableNumber: number | null = null
const admin = {
    username: "admin",//property
    findAllResources(): Array<string> { //method
        return ["登录页面", "修改用户信息"]
    }
}
interface Animal {
    name: string
    weigh(): number
}
class Person {
    name: string
    constructor(_name: string) {
        this.name = _name
    }
    weigh(): number {
        return 100
    }
}

function add(a: number, b = 1) {
    return a + b
}

const sum = (a: number, b: number) => a + b

type OperationType = (a: number, b: number) => number
const sum2: OperationType = (a, b) => a + b
const minus: OperationType = (a, b) => a - b
const multipy: OperationType = (a, b) => a * b

const array = ["a", "b", "c"]
const nullableArray = ["a", "b", null]

//key:username, value: age
const map = new Map<string, number>([
    ["yuri", 10],
    ["peter", 20],
    ["henry", 30],
])
const set = new Set<number>([1, 2, 1, 2, 0,])

export { nullableString, nullableNumber, admin, Animal, Person, add, sum, sum2, minus, multipy, array, nullableArray, map, set, }