function fiver (number) {
    let isEven = number % 2 === 0
    let isOdd = number % 2 === 1
    let isFiver = number % 5 === 0
    let isNotFiver = !isFiver
        if (isEven && isFiver)  {return "evenfiver"
        }
        else if (isEven && isNotFiver) {return "even"} 
     else if (isOdd && isNotFiver) {
            return "odd"
        } else if (isOdd && isFiver) {
        return "oddfiver"
        
    } else { return null
    }
         
  }
//   let result1 = fiver(123)
//   let result2 = fiver(126)
//   let result3 = fiver(125)
//   let result4 = fiver(130)
//   console.log(result1)
//   console.log(result2)
//   console.log(result3)
//   console.log(result4)

  console.log(fiver(123) === "odd")
  console.log(fiver(126) === "even")
  console.log(fiver(125) === "oddfiver")
  console.log(fiver(130) === "evenfiver")
  console.log(fiver("cat"))
