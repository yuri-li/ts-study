import { sayHello, message, admin, } from "@/hello"
describe("helloworld", () => {
    test("const string", () => {
        expect(message).toBe("hello world")
    })
    test("function sayHello", () => {
        const username = "yuri"
        const message = sayHello(username)
        expect(message).toBe(`hello ${username}`)
        expect(message).toBeString()
    })
    test("object", ()=>{
        expect(admin.username).toBe("admin")
        expect({}).toBeEmptyObject()
        expect(admin).toBeObject()
    })
})