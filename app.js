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
count=0;
function change_h1() {
    console.log("first name clicked");
    heading1.innerText="nethra : "+(++count);    
}
function change_h2() {
    console.log("last name clicked");
    heading1.innerText="perera : "+(--count);
}