// Код для первого задания напиши в этой функции
function crawlTree(arr) {
    let result = ''
    for (const arrElement of arr) {
        if (!Array.isArray(arrElement)) {
             result += arrElement
        } else {
             result += crawlTree(arrElement)
        }
    }
    return result
}






// Код для второго задания напиши в этой функции
function twoSum(arr, target) {
    const hash = {}
    const findRec = (i) => {
        const foundNum = hash[target - arr[i]]
        if (i === arr.length) {
            return -1
        }
        if (foundNum !== undefined ) {
            return [foundNum, i]
        }
        hash[arr[i]] = i
        return findRec(i + 1)

    }
    return findRec(0)
}

// Всё, что ниже, нужно для тестов. Не изменяй этот код
const functions = { crawlTree, twoSum };
module.exports = functions;
