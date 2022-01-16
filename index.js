// let today = moment().format('MMMM Do YYYY')  
const inquierer =require('inquirer')
const fs =  require('fs')
const moment =require('moment')
let today = moment().format("dddd, MMMM Do YYYY")

const gender = 
inquierer
.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "input",
        message: "Today's gender is: ",
        name: "gender"
    },
    {
        type: "input",
        message: "Enter your preferred pronouns:",
        name: "pronouns"
    },
    {
        type: "input",
        message:"Anything else you'd like to add?",
        name:"message",
    }
    
])

.then((data) => fs.writeFileSync(`./${data.name}.html`, generateHtml(data)))
.then(() => console.log("HTML has been generated"))
.catch((err) => console.log(err))

function message(data){ 
if(data.message =="")
    return ""

else if ( data.message !== "")
    return data.message
}
const generateHtml = ( data ) =>
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/style/style.css"/>    
    <title>My Gender</title>
</head>
<body>
    <h1>On this day:</h1>
    <h3> ${today}</h3>
    <h3> My name is: ${data.name}</h3>
    <h3> My pronouns are: ${data.pronouns}</h3>
    <h3> My gender is: ${data.gender}</h3>
    <h3> ${message(data)}</h3>
    <h4> Thanks and have a great day!</h4>


</body>
</html>

`



// module.exports = generateHtml