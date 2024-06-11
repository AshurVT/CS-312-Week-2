// i forgot  to set up the server. whoops.

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

    const UE1 = req.body.UE1;
    const UE2= req.body.UE2;
    const operator = req.body.operator;

console.log(UE1);
console.log(UE2);

const result = calculate(UE1, UE2, operator)


res.send('Result: ' + result);

})

app.listen(3000, function(){
    console.log("server working");
});


// i tried using a different const but was told that readline is required
const readline = require('readline');


const c1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// puts a float for UE (user entry) 1 and UE 2 so that the interface remembers what the user enters
function calculate(UE1, UE2, operator){
    UE1 = parseFloat(UE1);
    UE2 = parseFloat(UE2);

    // switched to a ternary operator instead of switch
    return operator === '+' ? UE1 + UE2 :
            operator === '=' ? UE1 - UE2 :
            'invalid';

    // Switch is so I can make sure the user inputs the operator to preform the calculation
//    switch (operator) {
//        case '+':
//            return UE1 + UE2;
//
  //      case '-':
    //        return UE1 - UE2;
      //  default:
        //    return 'Invalid';
//    }
}

 // this section of my code is where all the calculation and entry is performed, the meat and potatoes so to speak
function spoolupcalc() {
    c1.question('First number please: ', (UE1) => {
    c1.question('Enter "+" or "-": ', (operator) => {
    c1.question('Second number please: ', (UE2) => {
        const result = calculate(UE1, UE2, operator);
        console.log("Result: ", result);
    c1.close();
            })
        })
    })
}

spoolupcalc();