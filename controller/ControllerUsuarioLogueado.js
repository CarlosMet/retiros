export function getUserLogged(){
    const userLogged = window.localStorage.getItem("userLogged")
    if(userLogged){
        return JSON.parse(userLogged)
    }
    return false
}