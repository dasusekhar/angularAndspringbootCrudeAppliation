import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegisrationService } from '../user-regisration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

users:any;
email:string;
id:any;


  constructor(private service:UserRegisrationService,private router:Router) { }

  public delteUser(id:any)
  {

    let resp=this.service.deleteUser(id);
    resp.subscribe((data)=>this.users=data);
  }

  public findByUserByEmailId()
  {
    let resp=this.service.getUserByEmailId(this.email);
    resp.subscribe((data)=>this.users=data);
  }
  public updateUser(id:any)
  {
    this.router.navigate(['updateUser',id]);
  }

  ngOnInit(){

    let resp=this.service.getUsers();
    resp.subscribe((data)=>this.users=data);
    
  }

}
