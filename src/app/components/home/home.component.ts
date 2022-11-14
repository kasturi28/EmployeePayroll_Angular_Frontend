import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/employee-service.service';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logoUrl="./assets/images/logo.png";
  addUrl="./assets/icons/add-24px.svg";
  deleteUrl="./assets/icons/delete-black-18dp.svg";
  editUrl="./assets/icons/create-black-18dp.svg";

  constructor(
    private router:Router,
    private service:EmployeeServiceService
  ) { }

  list:any;
  public employeeUpdate:Employee=new Employee("",0,"",new Date, "", "",[])

  ngOnInit(): void {
    
    this.service.getAllEmployee().subscribe((data:any) =>{
      console.log(data);
      this.list= data.data;
    });
  }

    onDelete(id : Number){
      console.log(id);
      this.service.deleteEmployeeById(id).subscribe((data:any) =>{
        console.log(data);
        this.ngOnInit();
      })
    }
     id:Number = 0;
  
    onUpdate(id:Number,employeeUp:Employee){
      console.log(id,employeeUp)
      this.service.updateDataFunc(id,employeeUp);
      this.router.navigate(["form"]);
      
    }
    
  }



