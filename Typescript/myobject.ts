type User ={
    readonly _id: string;
    name:string;
    email:string|number;
    isActive:boolean;
    cardetails?:number;
}

let myuser:User = {
    _id:"124",
    name:"efe",
    email:"ewfwe12",
    isActive:false
}

console.log(myuser.email);  // ✅ 添加console.log来输出
console.log("用户信息:", myuser);  // ✅ 输出整个对象

export {}


type cardetails = {
    carddate:number
    cardnum?:number
    ispassed?:boolean
    ccv:number
}

let mycard:cardetails={
    carddate:55,
    ccv:324
}

console.log(mycard.ccv)
console.log(mycard)