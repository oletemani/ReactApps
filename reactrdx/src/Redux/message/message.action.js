const GM="GM"
const GN="GN"


let gmAction = () =>{
    console.log("Test gm")
    return {type : GM}
}

let gnAction =() =>{
    console.log("test Gn")
    return {type : GN}
}



export {gmAction,gnAction, GM, GN}