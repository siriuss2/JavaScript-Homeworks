// HOMEWORK#02
function multiplies() {
  let humanYearsNumber = Number(prompt("Enter the years:"));
  const dogYearsNumber = 7;

    if (
      Number.isNaN(humanYearsNumber)
    ) {
      return "Invalid input";
    }
        let result = humanYearsNumber * dogYearsNumber;
        let result2 = humanYearsNumber / dogYearsNumber;
        console.log(`Dog has ${result} years`);
        console.log(`The human have ${result2} years`);
        return result;
        
}

// SWITCH-HOMEWORK

function previousHomework(){
let userInput = Number(prompt("Enter the year"));
let chineseZodiac = (userInput-4)%12;


  switch(chineseZodiac){
    case 0:
        console.log("Rat")
        break;
    case 1:
        console.log("Ox")
        break;
    case 2:
        console.log("Tiger")
        break;
    case 3:
        console.log("Rabbit")
        break;
    case 4:
        console.log("Dragon")
        break;
    case 5:
        console.log("Snake")
        break;
    case 6:
        console.log("Horse")
        break;
    case 7:
        console.log("Goat")
        break;
    case 8:
        console.log("Monkey")
        break;
    case 9:
        console.log("Rooster")
        break;
    case 10:
        console.log("Dog")
        break;
    case 11:
        console.log("Pig")
        break;
    default:
        console.log("Enter a valid input")
        break;
  }
}

// HOMEWORK#03
function atm(){
  let userMoney = Number(prompt("Enter the amount of money on your account"));
  let withdrawnMoney = Number(prompt("Enter the amount of money you want to withdrawn"));
  let moneyLeft = userMoney - withdrawnMoney;

  if (
    Number.isNaN(userMoney) ||
    Number.isNaN(withdrawnMoney) ||
    typeof userMoney !== "number" ||
    typeof withdrawnMoney !== "number"
  ) {
    console.log("Invalid input!");
    return;
  }

  if(withdrawnMoney > userMoney){
    console.log("You don't have that amount of money on your account");
  }

  if(userMoney >= withdrawnMoney){
    console.log(`You just took ${withdrawnMoney} from your account and you have ${moneyLeft} left on your account`);
  }
}

// HOMEWORK#01-COPIED FROM GOOGLE :D
function detect_data_type(value)
{
let dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}
console.log(detect_data_type(12));
console.log(detect_data_type('w3resource'));
console.log(detect_data_type(false));
console.log(detect_data_type());
console.log(detect_data_type(null));


// atm();
// previousHomework();
// multiplies();
