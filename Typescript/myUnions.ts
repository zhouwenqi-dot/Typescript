let score: number | string= 33;

type User = {
    name:string;
    id:number;
}

type Admin= {
    username:string;
    id:number;
}

let wenqi: User|Admin = {name:"wenqi",id:334}

function getDbId(id:number|string){
    if(typeof id === "string"){
        return id.toUpperCase();
    }
    
    else if(typeof id === "number"){
        return `DB id is :${id+2}`;
    }
}

console.log(getDbId(3))
console.log(getDbId("wenqi"));
export{}

const data: (number|string)[] =[1,"3"]


let seatAllotment: "aisle"|"middle"|"window"

seatAllotment ="aisle"
// seatAllotment ="crew"