let data = [
    {'principal' : 2500, 'time' : 1.8},
    {'principal' : 1000, 'time' : 5},
    {'principal' : 3000, 'time' : 1},
    {'principal' : 2000, 'time' : 3}
]

let simpleInterestCal = (principal, time, rate) =>{
    let interest = (principal * rate * time) / 100
    return {principal, time, rate, interest}
}

let intrestCalculator = array => {
    let rate
    let interestData = []

    array.forEach(element => {
       if(element.principal >= 2500 && element.time > 1 && element.time < 3){
           rate = 3
           interestData.push(simpleInterestCal(element.principal, element.time, rate))
       }
       else if(element.principal >= 2500 && element.time >= 3){
           rate = 4
           interestData.push(simpleInterestCal(element.principal, element.time, rate))
       }
       else if(element.principal < 2500 || element.time <= 1){
           rate = 2
           interestData.push(simpleInterestCal(element.principal, element.time, rate))
       }else{
           rate = 1
           interestData.push(simpleInterestCal(element.principal, element.time, rate))
       }
    })

    console.log(interestData)
    return interestData
}

console.log(intrestCalculator(data));
console.log('Test!')