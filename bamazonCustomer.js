const inquirer  = require("inquirer");
const mysql = require("mysql");

inquirer.prompt([


{

type: "input",
message: "Please enter ID of product you would like to purchase",
name: "idInput"

}, 


{

    type: "input",
    message: `How much would you like to purchase?`,
    name: "quantityInput"
    
    }




]).then(answers => {


console.log(


    
`idInput: ${answers.idInput}
quantityInput: ${answers.quantityInput}
    
`  
);


const connection = mysql.createConnection({

host: "localhost",
port: 3306,
user: "root",
password: "password123",
database: "bamazon"


});


connection.connect (err => {

if (err) throw err;

console.log(`connected as id ${connection.threadId}`);
  connection.end();



})



const query = connection.query(
"SELECT * FROM products", (err, res)=>{ 

if (err) throw err;
console.log(res);
connection.end();
})












}    
    )