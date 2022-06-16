const INC = "INC"
const DEC = "DEC"

let incAction = () =>{
    return {type: INC}
}

let decAction = () =>{
    return {type: DEC}
}

export {INC, DEC, incAction, decAction}