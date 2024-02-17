export class UserModel {
    id: string
    name: string
    surname: string
    

    
    constructor(obj?:any) {
        this.id = obj && obj.id || "";
        this.name = obj && obj.name || "";
        this.surname= obj && obj.surname || "";
    }
}
