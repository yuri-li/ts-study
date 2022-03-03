describe("基本类型", () => {
    test("联合类型", () => {
        type Add = (a: number, b: number) => number //声明。关注点：参数与返回值的类型
        type MyType = boolean | number | "hello" | "abc" | Add

        const str: MyType = "abc"
        expect(str).toBeString()
        expect(str).toBe("abc")

        const add: MyType = (e, f) => e + f
        const minus: MyType = (a, b) => a - b
        expect(add(1, 1)).toBe(2)
        expect(minus(1, 1)).toBe(0)
    })

    test("{}", () => {
        const emptyObj = {}
        expect(emptyObj).toBeEmptyObject()

        const hasPropertiesObj = { id: "1001", age: 18, }
        expect(hasPropertiesObj.age).toBe(18)

        const hasFunctionObj = {
            id: "1001",
            isMember: (price: number) => price > 100
        }
        expect(hasFunctionObj.isMember(200)).toBeTrue()
    })
})