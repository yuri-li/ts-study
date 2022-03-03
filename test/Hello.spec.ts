import { message, num } from "@/hello"

describe("hello world", (): void => {
    test("string", () => {
        expect(message).toBe("hello world")
        expect(message).toBeString()
    })
    test("number", () => {
        expect(num).toBe(1)
    })
})