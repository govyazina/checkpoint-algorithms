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
    for (let i = 0; i < arr.length; i++) {
        const findedNum = hash[target - arr[i]];
        if (findedNum !== undefined ) {
                return [findedNum, i]
        }
        hash[arr[i]] = i
    }
    return -1
}

// Всё, что ниже, нужно для тестов. Не изменяй этот код
const functions = { crawlTree, twoSum };
module.exports = functions;
