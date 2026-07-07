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
let headingTag=document.getElementById("heading");
console.log(headingTag);

// change h1 object's inner text 
headingTag.innerText="Nethra Perera";

//change heading when clicking the button
let count=0;
// function changeHeading() {
//     console.log("clicked");
//     headingTag.innerText="button is clicked...!"+count++;
// }

// change heading and the clicking count of + and - buttons
function increseValue() {
    headingTag.innerText="Nethra : "+(++count);
    console.log("++count");
}

function decreseValue() {
    headingTag.innerText="Perera : "+(--count);
    console.log("--count");
}

// -------------------------------------------------------------------------------------------

// change heading as the user input 
function changeHeading() {
    let txtInputValue=txtInput.value;
    //console.log(txtInputTag);
    headingTag.innerText=txtInputValue;    
}

// -------------------------------------------------------------------------------------------

