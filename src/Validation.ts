interface StringValidator {
    isAcceptable(s: string): boolean
}
class Never implements StringValidator {
    isAcceptable(s: string): boolean {
        throw new Error(`input ${s}. but Method not implemented.`) 
    }
}
class ID implements StringValidator {
    static regex = /^((11|12|13|14|15|21|22|23|31|32|33|34|35|36|37|41|42|43|44|45|46|50|51|52|53|54|61|62|63|64|65)[0-9]{4})(([1|2][0-9]{3}[0|1][0-9][0-3][0-9][0-9]{3}[Xx0-9])|([0-9]{2}[0|1][0-9][0-3][0-9][0-9]{3}))$/
    isAcceptable(s: string): boolean {
        return s.length > 0 && (s.length == 15 || s.length == 18) && ID.regex.test(s)
    }
}
class StrongPassword implements StringValidator {
    static regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,16}$/
    isAcceptable(s: string): boolean {
        return s.length > 0 && s.length >= 6 && s.length <= 16 && StrongPassword.regex.test(s)
    }
}
const IDValidator = new ID()
const StrongPasswordValidator = new StrongPassword()
const NeverValidator = new Never()

export { IDValidator, StrongPasswordValidator, NeverValidator, }