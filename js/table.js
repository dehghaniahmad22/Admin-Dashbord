const users = [
  {
    id: 1,
    first_name: "ahmad",
    last_name: "dehghani",
    phone_number: "09166161616",
    email: "ahmaddehghani@yahoo.com",
  },
  {
    id: 2,
    first_name: "mahmod",
    last_name: "kazemi",
    phone_number: "09166161618",
    email: "ahmaddehghani@yahoo.com",
  },
  {
    id: 3,
    first_name: "ali",
    last_name: "dehghani",
    phone_number: "091661611818",
    email: "ahmaddehghani@yahoo.com",
  },
  {
    id: 4,
    first_name: "amir",
    last_name: "dehghani",
    phone_number: "091661611717",
    email: "ahmaddehghani@yahoo.com",
  },
  {
    id: 5,
    first_name: "iman",
    last_name: "dehghani",
    phone_number: "09166161619",
    email: "ahmaddehghani@yahoo.com",
  },
  {
    id: 6,
    first_name: "arman",
    last_name: "dehghani",
    phone_number: "09166161619",
    email: "ahmaddehghani@yahoo.com",
  },
  {
    id: 1,
    first_name: "ahmad",
    last_name: "dehghani",
    phone_number: "09166161616",
    email: "ahmaddehghani@yahoo.com",
  },
  {
    id: 2,
    first_name: "mahmod",
    last_name: "kazemi",
    phone_number: "09166161618",
    email: "ahmaddehghani@yahoo.com",
  },
  {
    id: 3,
    first_name: "ali",
    last_name: "dehghani",
    phone_number: "091661611818",
    email: "ahmaddehghani@yahoo.com",
  },
  {
    id: 4,
    first_name: "amir",
    last_name: "dehghani",
    phone_number: "091661611717",
    email: "ahmaddehghani@yahoo.com",
  },
  {
    id: 5,
    first_name: "iman",
    last_name: "dehghani",
    phone_number: "09166161619",
    email: "ahmaddehghani@yahoo.com",
  },
  {
    id: 6,
    first_name: "arman",
    last_name: "dehghani",
    phone_number: "09166161619",
    email: "ahmaddehghani@yahoo.com",
  },
];

console.log(users.length);

let rows = `<tr>
        <th>#</th>
        <th>id</th>
        <th>first name</th>
        <th>last name</th>
        <th>phone number</th>
        <th>email</th>
      </tr>`;

let table = document.getElementById("table");

for (let i = 0; i < users.length; i++) {
  let color = "#eee";
  if (i % 2 == 1) {
    color = "#fff";
  }

  rows += `<tr style="background-color:${color}">
        <td>${i + 1}</td>
        <td>${users[i].id}</td>
        <td>${users[i].first_name}</td>
        <td>${users[i].last_name}</td>
        <td>${users[i].phone_number}</td>
        <td>${users[i].email}</td>
      </tr>`;
}

table.innerHTML = rows;

const products = [
  {
    id: 4444,
    product_name: "mince_beef",
    price: "£5",
    stock: 10,
  },
  {
    id: 5555,
    product_name: "milk",
    price: "£1.65",
    stock: 20,
  },
  {
    id: 4545,
    product_name: "peanut butter",
    price: "£2",
    stock: 30,
  },
  {
    id: 4343,
    product_name: "cheese",
    price: "£2",
    stock: 25,
  },
  {
    id: 3232,
    product_name: "chicken",
    price: "£4.65",
    stock: 21,
  },
];

let product_rows = `<tr>
<th>#</th>
<th>id</th>
<th>product name</th>
<th>price</th>
<th>stock</th>
</tr>`;

const product = document.getElementById("product");

for (let i = 0; i < products.length; i++) {
  let color = "#fff";
  if (i % 2 == 1) {
    color = "#eee";
  }
  product_rows += `<tr style="background-color:${color}">
 <td>${i + 1}</td>
 <td>${products[i].id}</td> 
 <td>${products[i].product_name}</td> 
 <td>${products[i].price}</td> 
 <td>${products[i].stock}</td>
  </tr>`;
}

product.innerHTML = product_rows;

const food = [
  {
    id: 11,
    product_name: "lettuce",
    price: "£1.65",
    stock: 12,
  },
  {
    id: 22,
    product_name: "orange",
    price: "£1",
    stock: 14,
  },
  { id: 33, product_name: "apple", price: "£1.23", stock: 12 },
  {
    id: 55,
    product_name: "banana",
    price: "£1",
    stock: 23,
  },
];
let phone_rows = `<tr>
<th>row</th>
<th>id</th>
<th>product name</th>
<th>price</th>
<th>stock</th>
<tr/>`;

let phone = document.getElementById("phone");

for (let i = 0; i < food.length; i++) {
  let color = "#eee";
  if (i % 2 == 1) {
    color = "#fff";
  }

  phone_rows += `<tr style="background-color:${color}">
  <td>${[i]}</td>
  <td>${food[i].id}</td>
  <td>${food[i].product_name}</td>
  <td>${food[i].price}</td>
  <td>${food[i].stock}</td>
  </tr>`;
}
phone.innerHTML = phone_rows;
