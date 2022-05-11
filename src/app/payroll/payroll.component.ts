import { Component, OnInit } from '@angular/core';
import { User } from '../registration/user';
import { UserRegisrationService } from "../user-regisration.service";


@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {
user:User=new User("","",0,"");
  

  message:any;
  id:any;
    constructor(private service:UserRegisrationService) { }
  
    ngOnInit(){
    }
  
    public registerNow(id:any)
      {
        let resp=this.service.updateUsersDetails(this.user);
        resp.subscribe((data)=>this.message=data);
      }


}
