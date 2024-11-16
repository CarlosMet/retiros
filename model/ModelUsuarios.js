const storedUsers = window.localStorage.getItem("users")



export let usuarios = storedUsers ? JSON.parse(storedUsers) : [{nombre: "usuario", email: "usuario@mail.com", password: "123"},{nombre: "admin", email: "admin@mail.com", password: "123"}  ]



// export let usuarios =[
//     {nombre: "usuario", email: "usuario@mail.com", password: "123"},
//     {nombre: "admin", email: "admin@mail.com", password: "123"}
// ]

