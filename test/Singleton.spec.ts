import { singleton } from "@/Singleton"

describe("单子模式",()=>{
    /* test("class", ()=>{
        const s1 = new Singleton()
        const s2 = new Singleton()

        expect(s1.randomNumber).not.toBe(s2.randomNumber)
    }) */
    test("const", ()=>{
        console.log(singleton.randomNumber)
        expect(singleton.randomNumber).toBe(singleton.randomNumber)
    })
})