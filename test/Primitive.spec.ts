import { NeverValidator } from "@/Validation"
describe("基本类型", () => {
    test("类型推断", () => {
        expect("foo").toBeString()
        expect(true).toBeBoolean()
        expect(1234).toBeNumber()

        const s: string | null = null
        expect(s).toBeNull()

        try {
            NeverValidator.isAcceptable("")
        } catch (error) {
            expect(error).toBeInstanceOf(Error)
        }
    })
    test("object,包含属性，方法", () => {
        expect({}).toBeEmptyObject()

        const admin = {
            username: "admin",//property
            findAllResources(): Array<string> { //method
                return ["登录页面", "修改用户信息"]
            }
        }
        expect(admin.username).toBe("admin")
        expect(admin.findAllResources()).toIncludeAllPartialMembers(["登录页面"])
    })
    test("interface", () => {
        interface Animal {
            name: string
            weigh(): number
        }
        const pig = { name: "Peggy", weigh: () => 100 } as Animal
        expect(pig.name).toBe("Peggy")
        expect(pig.weigh()).toBe(100)
    })
    test("class", () => {
        class Animal {
            name: string
            constructor(_name: string) {
                this.name = _name
            }
            weigh(): number {
                return 100
            }
        }
        const mikky = new Animal("Jerry")
        expect(mikky.name).toBe("Jerry")
        expect(mikky.weigh()).toBe(100)
    })
    test("function", () => {
        function add(a: number, b = 1) {
            return a + b
        }
        expect(add(1, 1)).toBe(2)
        expect(add(1)).toBe(2)

        const sum = (a: number, b: number) => a + b
        expect(sum(1, 1)).toBe(2)

        type SumType = (a: number, b: number) => number
        const sum2: SumType = (a, b) => a + b
        expect(sum2(1, 1)).toBe(2)
    })
})