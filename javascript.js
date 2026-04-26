document.querySelector("#want").addEventListener('click', add)

function input(){
    let names = document.querySelector("user-input").value
    let itemLink = document.querySelector("item-input").value
    let itemArr = []
    if(names === "" || names === null){
        return "Error, Please add a name"
    }else if(itemLink === "" || names === null){
        return "Error, Please add a Link"
    }else{
        
    }
}
