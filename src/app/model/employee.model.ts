export class Employee {

    public name: string = "";
    public salary: number= 0;
    public gender:string = "";
    public date: Date= new Date;
    public note:string = "";
    public profilePic:string = "";
    public department:Array<any> = [];

    constructor(name: string,salary: number,gender:string,date: Date,note:string,profilePic:string,department:Array<any>){
        this.name=name;
        this.salary=salary;
        this.gender=gender;
        this.date=date;
        this.note=note;
        this.profilePic=profilePic;
        this.department=department;
    }
}
