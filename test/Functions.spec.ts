
describe("Functions", () => {
    test("filter", () => {
        const arr = [0, 1, 2, 3, 4, 5]
        const brr = arr.filter((value, index) => {
            let temp = value
            temp = 10
            console.log(`temp:${temp}, value:${value}`)

            const result = value <= 2
            console.log(`value: ${value}, index:${index}, condition result: ${result}`)
            return result
        })
        expect(brr).toHaveLength(3)

        expect(filter(arr, (value) => value <= 2)).toHaveLength(3)
    })
})
function filter(arr: number[], predicate: (value: number, index: number) => boolean): number[] {
    const result: number[] = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index]
        if (predicate(element, index)) {
            result.push(element)
        }
    }
    return result
}