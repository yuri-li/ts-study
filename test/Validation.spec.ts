import { IDValidator, StrongPasswordValidator, } from "@/Validation"
describe("Validation", () => {
    test.each`
        id                      | expected
        ${""}                   | ${false}
        ${"123"}                | ${false}
        ${"abc"}                | ${false}
        ${"1a_"}                | ${false}
        ${"130533198201121512"} | ${true} 
        ${"130629198101095717"} | ${true} 
    `("`$id`是否合法的身份证号：$expected", ({ id, expected }) => {
        expect(IDValidator.isAcceptable(id)).toBe(expected)
    })

    test.each`
        password                | expected
        ${""}                   | ${false}
        ${"123"}                | ${false}
        ${"abc"}                | ${false}
        ${"123abc"}             | ${false}
        ${"mX3/$^"}             | ${true} 
        ${"tB5pL;[VZax+*~N:"}   | ${true} 
    `("`$password`是否强壮的密码：$expected", ({ password, expected }) => {
        expect(StrongPasswordValidator.isAcceptable(password)).toBe(expected)
    })
})