import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { gb } from '../asd';
  
@Injectable({
  providedIn: 'root'
})
export class getusergroup {
  private url = gb.apiURL+'/api/partdesk';
  
  
   
  constructor(private httpClient: HttpClient) { }
  
  getgroups(userid:any){
    
    return this.httpClient.get(this.url,{params:userid});
  }
}
