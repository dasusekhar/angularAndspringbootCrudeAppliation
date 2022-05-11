import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegisrationService {

  constructor(private http:HttpClient) { }
  public doRegistration(user:any)
  {
    return this.http.post("http://localhost:9091/user/save",user,{responseType:'text'as 'json'})
  }
  public getUsers()
  {
    return this.http.get("http://localhost:9091/user/getAll");
  }
  public  deleteUser(id:any)
  {
    return this.http.delete("http://localhost:9091/user/deleteById/"+id);
  }
  public getUserByEmailId(email:any)
  {
    return this.http.get("http://localhost:9091/user/email/"+email);
  }
  public updateUsersDetails(id:any)
  {
    return this.http.put("http://localhost:9091/user/update/"+id,{responseType:'text'as 'json'});
  }

  
}
