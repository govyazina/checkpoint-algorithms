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
function twoSum() {}

// Всё, что ниже, нужно для тестов. Не изменяй этот код
const functions = { crawlTree, twoSum };
module.exports = functions;
