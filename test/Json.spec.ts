import course from "~/test.json"
describe("json", () => {
    test("obj to json", () => {
        const obj = {
            "1": 4280,
            "2": 4280,
            "3": 4180,
            "4": 4180,
            "5": 3880,
            "6": 3880
        }
        const json = JSON.stringify(obj)
        expect(json).toBe("{\"1\":4280,\"2\":4280,\"3\":4180,\"4\":4180,\"5\":3880,\"6\":3880}")
    })

    test("json-string to obj", () => {
        const json = "{\"1\":4280,\"2\":4280,\"3\":4180,\"4\":4180,\"5\":3880,\"6\":3880}"
        const obj = JSON.parse(json)
        expect(obj["1"]).toBe(4280)
    })

    test("json-file to obj",()=>{
        expect(course["1"]).toBe(4280)
    })
})