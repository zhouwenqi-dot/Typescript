interface User{
    email : string,
    userID: number,
    readonly username?:string,
    googleid?:string,
    // starttrail:()=>string
    startTrail():string,
    getCoupon(nameqq:string):number
}

const wenqi:User ={email:"wfeq",userID:3411412,
    startTrail:()=>{
        return "ewfewf"
    },
    getCoupon:(name:"weqwww")=>{
        return 10
    }
}

console.log(wenqi.email);
export{}
