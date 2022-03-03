import { singleton } from "@/Singleton"

describe("Singleton",()=>{
    test("random id",()=>{
        const a = singleton
        const b = singleton

        expect(a.id).not.toBe(b.id)
    })
})