// class Customer{
//     name;
//     age;
//     address;

//     constructor(name, age, address){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
//     getName(){
//         return this.name;
//     }
//     setName(name){
//         this.name = name;
//     }
// }

// let customer1 = new Customer("Sharadha", 20, "Bangalore");
// console.log(customer1);
// console.log(customer1.getName());

// ---------------------------------------------

// let customer2 = {
//     name: "John",
//     age: 25,
//     address: "New York",
//     salary: 50000,
//     items: [
//             {
//                 id: 1,
//                 name: "item1",
//                 price: 100,
//                 variants: [
//                     {
//                         id: 1,
//                         name: "variant1",
//                         price: 10
//                     },
//                     {
//                         id: 2,
//                         name: "variant2",
//                         price: 20

//                     }
//                 ]
//             }, 
//             {
//                 id: 2,
//                 name: "item2",
//                 price: 200
//             }, 
//             {
//                 id: 3,
//                 name: "item3",
//                 price: 300
//             }
//     ],
//     father: {
//         name: "Doe",
//         age: 50,
//         address: "New York"
//     }
// };

// console.log(customer2.items[0].variants[1].name);

// document.write("<h1>heyy....!</h1>");
// document.write("<h2>heyy....!</h2>");
// console.log(document);
// console.log(document.title);

// let heading=document.getElementById("heading1");
// console.log(heading);
// heading.innerText="Nethra";
// count=0;
// function change_h1() {
//     console.log("first name clicked");
//     heading1.innerText="nethra : "+(++count);    
// }
// function change_h2() {
//     console.log("last name clicked");
//     heading1.innerText="perera : "+(--count);
// }



// function add() {
//     let num1 = document.getElementById("txt_input1");
//     let userInput1=num1.value;
//     console.log(userInput1);

//     let num2 = document.getElementById("txt_input2");
//     let userInput2=num2.value;
//     console.log(userInput2);

//     let addition=(Number(userInput1)+Number(userInput2));
//     console.log(addition);

//     let heading = document.getElementById("heading1");
//     heading.innerText = addition;
// }

// function sub() {
//     let num1 = document.getElementById("txt_input1");
//     let userInput1=num1.value;
//     console.log(userInput1);

//     let num2 = document.getElementById("txt_input2");
//     let userInput2=num2.value;
//     console.log(userInput2);

//     let substraction=0;
//     if (userInput1>userInput2) {
//        substraction=(Number(userInput1)-Number(userInput2)); 
//     }else{
//         substraction=(Number(userInput2)-Number(userInput1)); 
//     }
//     console.log(substraction);

//     let heading = document.getElementById("heading1");
//     heading.innerText = substraction;
//}

//      ////////////////////////////////////////////////////////////////

// let customerList=[];

// function btnAddCustomerOnAction() {
//     let txtName = document.getElementById("txtName").value;
//     let txtAddress = document.getElementById("txtAddress").value;
//     let txtAge = document.getElementById("txtAge").value;
//     let txtEmail = document.getElementById("txtEmail").value;
//     let txtSalary = document.getElementById("txtSalary").value;

//     let customer = {
//         name: txtName,
//         address: txtAddress,
//         age: txtAge,
//         email: txtEmail,
//         salary: txtSalary
//     }

//     customerList.push(customer);
//     console.log(customerList);
    
    
// }
let customerList=[];
function loadTable(){
    let tblCustomers=document.getElementById("tblCustomers");
    tblCustomers.innerHTML+=`<tr>
            <td>Saman</td>
            <td>Walana</td>
            <td>15</td>
            <td>saman@email.com</td>
            <td>750000</td>
        </tr>`
    console.log(tblCustomers);
    
}   