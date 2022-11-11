import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/employee-service.service';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  logoUrl="./assets/images/logo.png";
  image1Url="./assets/profile-images/Ellipse -1.png";
  image2Url="./assets/profile-images/Ellipse -2.png";
  image3Url="./assets/profile-images/Ellipse -3.png";
  image4Url="./assets/profile-images/Ellipse -4.png";

constructor(private router:Router,
  private service:EmployeeServiceService,
  private route:ActivatedRoute) { }

ngOnInit(): void {
}
employee:Employee=new Employee("",0,"",new Date, "", "",[])

onSubmit(){
console.log(this.employee)
this.employee.department=this.tempArr;
this.service.insertEmployee(this.employee).subscribe((data:any) =>{
this.router.navigate([""])
})
}

deptName: any;
// args: any;
emps:any = "";
allEmp : Array<any>=[];  
tempArr : Array<any> = [];
depart2: any = ["HR", "Sales", "Engineer", "Finance", "Other"];
checkBoxChange(dptname:any){

if(!this.tempArr.includes(dptname)){
this.tempArr.push(dptname);
}
else{
const index = this.tempArr.indexOf(dptname);
if (index > -1) { // only splice array when item is found
this.tempArr.splice(index, 1); // 2nd parameter means remove one item only
}
}
}
}