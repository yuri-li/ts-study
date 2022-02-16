import { admin, Animal, nullableString, Person, add, sum, sum2, minus, multipy, } from "@/common"
describe("types", () => {
    test("联合类型", () => {
        type NullableString = string | null

        expect(nullableString as NullableString).toBeTruthy()
        expect(typeof nullableString).toBe("object")
        expect(nullableString).not.toBeEmptyObject()
    })
    test("object", () => {
        type Admin = {
            username: string
            findAllResources(): Array<string>
        }
        expect(admin as Admin).toBeTruthy()
        // const animal = { name: "Peggy" } as Animal
        // expect(animal as Admin)
    })
    test("interface", () => {
        const animal = { name: "Peggy" } as Animal
        expect(animal as Animal).toBeTruthy()
    })
    test("class", () => {
        const mikky = new Person("Jerry")
        expect(mikky as Person).toBeTruthy()
    })
    test("function", () => {
        type OperationType = (a: number, b: number) => number
        [add, sum, sum2, minus, multipy,].forEach(
            fun => expect(fun as OperationType).toBeTruthy()
        )
    })
})