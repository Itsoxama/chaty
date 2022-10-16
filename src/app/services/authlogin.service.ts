import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { gb } from '../asd';
  
@Injectable({
  providedIn: 'root'
})
export class authlogin {
  private url = gb.apiURL+'/api/login';
  
   
  constructor(private httpClient: HttpClient) { }
  
  authenticateuser(user:any){
    
    return this.httpClient.get(this.url,{params:user});
  }
}
