function add(_num:number):number{
    return _num+2
}

function getUpper(val:string){
    return val.toUpperCase()
}

function signUpUser(name:string,_email:string,_isPaid:boolean){
    return name
}

let login =(name:string,_email:string,_ispaid:boolean)=>name


function getValue(myVal:number):boolean|string{
    if (myVal>5){
        return true
    }
    return "false"
}

function consoleError(message:string):void{
    console.log(message)
  
}




const heros = ["thor","spiderman","ironman"]
heros.map((hero):string=>{return `hero is ${hero}`})




console.log(getValue(2))
console.log(signUpUser("wenqi","weqqq",true))

console.log(getUpper("4"))
console.log(add(5))

console.log(login("wenqi","weqqq",true))


console.log('h')
console.log("fqefeqfef")

type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User): User {
    return {
        name: user.name,      // 使用传入的 name: "wenqi"
        email: user.email,    // 使用传入的 email: "weq"
        isActive: true        // 强制设置为 true（忽略传入的 isActive:true）
    };
}

// 第一行输出
console.log(createUser({name: "wenqi", email: "weq", isActive: true}));
// 输出: {name: "wenqi", email: "weq", isActive: true}

// 第二行输出  
console.log("he");
// 输出: he
console.log("weqreqrewgqfrwqgrwqg")

export{}
