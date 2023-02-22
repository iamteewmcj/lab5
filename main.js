let column_1 = [9,1,1,10,2,8,5,7,10,9,4,9,10,9,1,10,1,10,2,1,2,9,4,8,5,3,5,8,0,4]
let column_2 = [3,0,6,5,5,9,1,7,9,0,8,8,3,5,9,3,8,7,6,2,10,9,3,2,5,3,10,6,1,1]
let column_3 = [53,75,45,49,52,52,48,60,98,49,91,60,93,63,76,64,69,99,90,50,75,70,100,100,70,56,54,100,64,93]
let column_4 = [74,75,43,79,42,66,72,59,92,40,53,98,43,99,76,53,68,62,100,52,54,94,51,86,45,43,54,73,98,74]

let sum_1 = 0
let sum_2 = 0
let sum_3 = 0
let sum_4 = 0

for (let i = 0; i < 30; i++){
    sum_1 += column_1[i]
    sum_2 += column_2[i]
    sum_3 += column_3[i]
    sum_4 += column_4[i]
}

let sums = [sum_1, sum_2, sum_3, sum_4]
let total_score = 0

for(let i = 0; i < 4; i++){
    total_score += sums[i]
}



const results = {
    col1: column_1,
    col2: column_2,
    col3: column_3,
    col4: column_4,
    sums: sums,
    total_score: total_score,
}

console.log(results)
