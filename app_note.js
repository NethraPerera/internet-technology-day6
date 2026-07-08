// =========== creating objects in java script ==============

// let orders={
//     orderId:"or001",
//     orderItem:"rice cooker",
//     orderDate:"2001-10-10",
//     price:2000,
//     customer:{
//         name:"Nethra",
//         age:"24",
//         gender:"male"
//     }
// }
// console.log(orders);


// -------------------------------------------------------------------------------------------

// ======== dom malipulation ============

// console.log(document);  //shows the HTML document as an Object in the console
// console.log(document.title); //shows the title of the HTML document in the console
// document.write("hi");   // shows hi on the web page
// document.write("<h1>hi</h1>"); // shows hi as a heading

// -------------------------------------------------------------------------------------------

// get the h1 element(object) and assign it to a variable
let headingTag = document.getElementById("heading");
//console.log(headingTag);

// change h1 object's inner text 
//headingTag.innerText="Nethra Perera";

//change heading when clicking the button
let count = 0;
// function changeHeading() {
//     console.log("clicked");
//     headingTag.innerText="button is clicked...!"+count++;
// }

// change heading and the clicking count of + and - buttons
function increseValue() {
    headingTag.innerText = "Nethra : " + (++count);
    console.log("++count");
}

function decreseValue() {
    headingTag.innerText = "Perera : " + (--count);
    console.log("--count");
}

// -------------------------------------------------------------------------------------------

// change heading as the user input 
function changeHeading() {
    let txtInputValue = txtInput.value;
    //console.log(txtInputTag);
    headingTag.innerText = txtInputValue;
}

// -------------------------------------------------------------------------------------------

//addition and substrction
function additionOnAction() {
    console.log(document.getElementById("inputNumber1").value);
    let num1 = Number(document.getElementById("inputNumber1").value);
    let num2 = Number(document.getElementById("inputNumber2").value);

    console.log(num1 + num2);
    //console.log(parseInt(num1)+parseInt(num2));

    document.getElementById("output").innerText = (Number(num1) + Number(num2));

}
function substractionOnAction() {
    console.log(document.getElementById("inputNumber2").value);
    let num1 = Number(document.getElementById("inputNumber1").value);
    let num2 = Number(document.getElementById("inputNumber2").value);

    if (num1 > num2) {
        console.log(num1 - num2);
        document.getElementById("output").innerText = num1 - num2;
    } else {
        console.log(num2 - num1);
        document.getElementById("output").innerText = num2 - num1;
    }
    //console.log(parseInt(num1)+parseInt(num2));
}

// -------------------------------------------------------------------------------------------
let customerList = [];
//  saving user inputs using java script
function btnAddCustomerOnAction() {
    let txtName = document.getElementById("txtName").value;
    let txtId = document.getElementById("txtId").value;
    let txtAddress = document.getElementById("txtAddress").value;
    let txtEmail = document.getElementById("txtEmail").value;
    let txtSalary = document.getElementById("txtSalary").value;
    let txtAge = document.getElementById("txtAge").value;

    // console.log(txtName);
    // console.log(txtId);
    // console.log(txtAddress);
    // console.log(txtEmail);
    // console.log(txtSalary);
    // console.log(txtAge);

    let customer = {
        name: txtName,
        id: txtId,
        address: txtAddress,
        email: txtEmail,
        salary: txtSalary,
        age: txtAge
    }
    customerList.push(customer);
    console.log(customerList);

}

// -------------------------------------------------------------------------------------------
// adding user inputs to a table using java script

function loadTableOnAction() {
    let tblCustomers = document.getElementById("tblCustomers");
    //console.log(customer);

    tblCustomers.innerHTML += `
        <tr>
            <td>Nethra</td>
            <td>c001</td>
            <td>Gampaha</td>
            <td>22</td>
            <td>20000</td>
            <td>adaf</td>
        </tr>
    `

    console.log(tblCustomers);

}