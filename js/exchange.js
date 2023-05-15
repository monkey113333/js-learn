//mmk to usd

const rate = {
    usd : 2100,
    sgd : 1569,
    eur : 2282
}

function usdToMMK(inputUsd){
    return inputUsd * rate.usd + " MMK"
}

console.log(usdToMMK(500))

function toMMK (input , cuurrency){
    return (input * rate[cuurrency]) + " MMK"
}

console.log (toMMK(500,"usd"))
console.log (toMMK(500,"sgd"))
console.log (toMMK(500,"eur"))