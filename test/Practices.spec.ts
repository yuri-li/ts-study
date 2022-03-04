import _ from "lodash"

describe("练习题", () => {
    const arr = _.range(1, 11)
    test("range", () => {
        const range = _.range(0, 3)

        expect(range.length).toBe(3)
        expect(range[0]).toBe(0)
        expect(range[2]).toBe(2)
    })
    test("1", () => {
        const range = arr.map(x => x * 2)

        expect(range.length).toBe(10)
        expect(range[0]).toBe(2)
        expect(range[9]).toBe(20)
    })
    test("2", () => {
        const result = arr
            .filter(x => x % 2 != 0)
            .reduce((x = 0, y) => x + y)

        /* 1,2,3,4,5,6,7,8,9,10
        1,3,5,7,9 */
        expect(result).toBe(25)
    })
    /* test("3", () => {
        
    }) */
    test("4", () => {
        const result = _.range(1, 10).map(i =>
            _.range(1, i + 1)
                .map(j => `${i}*${j}=${i * j}`)
                .join(" ")
        ).join("\n")
        expect(result).toBe(
            `1*1=1
2*1=2 2*2=4
3*1=3 3*2=6 3*3=9
4*1=4 4*2=8 4*3=12 4*4=16
5*1=5 5*2=10 5*3=15 5*4=20 5*5=25
6*1=6 6*2=12 6*3=18 6*4=24 6*5=30 6*6=36
7*1=7 7*2=14 7*3=21 7*4=28 7*5=35 7*6=42 7*7=49
8*1=8 8*2=16 8*3=24 8*4=32 8*5=40 8*6=48 8*7=56 8*8=64
9*1=9 9*2=18 9*3=27 9*4=36 9*5=45 9*6=54 9*7=63 9*8=72 9*9=81`)
    })
    /* test("5", () => {
        
    }) */
    test("6", () => {
        const indexs = [1, 2, 3, 4, 5]
        const weekdays = ["周一", "周二", "周三", "周四", "周五"]

        class MyDate {
            index: number
            weekday: string
            constructor(_index: number, _weekday: string) {
                this.index = _index
                this.weekday = _weekday
            }
        }
        const result: MyDate[] = indexs.map(
            (value, i) => new MyDate(value, weekdays[i])
        )

        expect(result[0].weekday).toBe("周一")
    })
})