let users = [];
loading_screen("flex");
fetch("https://ahmad.v1r.ir/api/users", {
  method: "GET",
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    loading_screen("none");
    users = data;

    let users_table = document.getElementById("users");

    let rows = "";

    for (let i = 0; i < users.length; i++) {
      let color = "#eee";
      if (i % 2 == 1) {
        color = "#fff";
      }

      rows += `<tr style="background-color:${color}">
       <td>${users[i].id}</td>
        <td>${users[i].name}</td>
        <td>${users[i].username}</td>
        <td>${users[i].email}</td>
        <td>${users[i].phone}</td>
        <td>${users[i].website}</td>
        <td><i data-user="${users[i].id}" class="mdi mdi-delete"></i> <i data-user="${users[i].id}" class="mdi mdi-account-edit"></i></td>
      </tr>`;
    }
    users_table.innerHTML = rows;
  });
function new_user_modal(type) {
  const modal = document.querySelector(".modal");
  modal.style.display = type;
}
function edit_user_modal(type) {
  const modal = document.querySelector(".edit-modal");
  modal.style.display = type;

  const name = document.querySelector(".edit-modal .form input[name=name]");
  const username = document.querySelector(
    ".edit-modal .form input[name=username]"
  );
  const email = document.querySelector(".edit-modal .form input[name=email]");
  const phone = document.querySelector(".edit-modal .form input[name=phone]");
  const website = document.querySelector(
    ".edit-modal .form input[name=website]"
  );

  name.value = "";
  username.value = "";
  email.value = "";
  phone.value = "";
  website.value = "";
}
function store_new_user() {
  const name = document.querySelector(".modal .form input[name=name]");
  const username = document.querySelector(".modal .form input[name=username]");
  const email = document.querySelector(".modal .form input[name=email]");
  const phone = document.querySelector(".modal .form input[name=phone]");
  const website = document.querySelector(".modal .form input[name=website]");
  const button = document.querySelector(".modal .form input[type=button]");
  // disable store user button
  button.value = "please wait ...";
  button.disabled = true;
  loading_screen("flex");
  // run store user requset
  fetch("https://ahmad.v1r.ir/api/users", {
    method: "POST",
    body: JSON.stringify({
      name: name.value,
      username: username.value,
      email: email.value,
      phone: phone.value,
      website: website.value,
    }),

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      loading_screen("none");
      // enable store user
      button.value = "store user";
      button.disabled = false;
      // empty fileds
      name.value = "";
      username.value = "";
      email.value = "";
      phone.value = "";
      website.value = "";
      // close store user modal
      new_user_modal(`none`);
      // add a new user in table
      let users_table = document.getElementById("users");
      const tr = document.createElement("tr");

      const id_td = document.createElement("td");
      id_td.innerText = data.id;
      tr.appendChild(id_td);

      const name_td = document.createElement("td");
      name_td.innerText = data.name;
      tr.appendChild(name_td);

      const username_td = document.createElement("td");
      username_td.innerText = data.username;
      tr.appendChild(username_td);

      const email_td = document.createElement("td");
      email_td.innerText = data.email;
      tr.appendChild(email_td);

      const phone_td = document.createElement("td");
      phone_td.innerText = data.phone;
      tr.appendChild(phone_td);

      const website_td = document.createElement("td");
      website_td.innerText = data.website;
      tr.appendChild(website_td);

      const delete_td = document.createElement("td");
      delete_td.innerHTML = `<i data-user="${data.id}" class="mdi mdi-delete"></i> <i data-user="${data.id}" class="mdi mdi-account-edit"></i>`;
      tr.appendChild(delete_td);

      users_table.appendChild(tr);

      // show final alert
      //alert(`user ${data.name} added sucsecfully`);
    });
}
// we do it, when our TAGS loaded and fetched
document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", function (event) {
    if (event.target.matches("i.mdi-delete")) {
      const user_id = event.target.getAttribute("data-user");

      const isConfirmed = confirm("are you sure?");
      if (isConfirmed) {
        loading_screen("flex");
        fetch(`https://ahmad.v1r.ir/api/users/${user_id}`, {
          method: "DELETE",
        })
          .then((response) => {
            loading_screen("none");
            let tr = event.target.closest("tr");
            tr.remove();

            return response.json();
          })
          .then((data) => {
            alert(data.message);
          });
      }
    } else if (event.target.matches("i.mdi-account-edit")) {
      const edit_modal = document.querySelector(".edit-modal");
      edit_modal.style.display = "flex";

      const user_id = event.target.getAttribute("data-user");
      loading_screen("flex");
      fetch(`https://ahmad.v1r.ir/api/users/${user_id}`, {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          loading_screen("none");
          const name = document.querySelector(
            ".edit-modal .form input[name=name]"
          );
          name.value = data.name;
          const username = document.querySelector(
            ".edit-modal .form input[name=username]"
          );
          username.value = data.username;
          const email = document.querySelector(
            ".edit-modal .form input[name=email]"
          );
          email.value = data.email;
          const phone = document.querySelector(
            ".edit-modal .form input[name=phone]"
          );
          phone.value = data.phone;
          const website = document.querySelector(
            ".edit-modal .form input[name=website]"
          );
          website.value = data.website;
        });
    }
  });
});
function loading_screen(type) {
  const loading = document.querySelector(".loading");
  loading.style.display = type;
}
document.getElementById("Search").addEventListener("keydown", function (event) {
  if (event.key === `Enter`) {
    loading_screen("flex");
    fetch(`https://ahmad.v1r.ir/api/users?search=${event.target.value}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        loading_screen("none");
        users = data;

        let users_table = document.getElementById("users");

        let rows = "";

        for (let i = 0; i < users.length; i++) {
          let color = "#eee";
          if (i % 2 == 1) {
            color = "#fff";
          }

          rows += `<tr style="background-color:${color}">
       <td>${users[i].id}</td>
        <td>${users[i].name}</td>
        <td>${users[i].username}</td>
        <td>${users[i].email}</td>
        <td>${users[i].phone}</td>
        <td>${users[i].website}</td>
        <td><i data-user="${users[i].id}" class="mdi mdi-delete"></i> <i data-user="${users[i].id}" class="mdi mdi-account-edit"></i></td>
      </tr>`;
        }
        users_table.innerHTML = rows;
      });
  }
});
