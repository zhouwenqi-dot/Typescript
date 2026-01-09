class User{
    _email : string
    _name: string
    constructor(email:string, name:string){
        this._email = email;
        this._name =name
    }
    get email():string{
        return `appple ${this._email}`
    }

    set email(updatedemail){
        this._email = updatedemail
    }
}

const wenqi =new User("wrqr","feqef")
console.log(wenqi.email)
wenqi.email = "q214141"
console.log(wenqi.email)
export{}