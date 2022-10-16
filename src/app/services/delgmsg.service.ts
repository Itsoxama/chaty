import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { gb } from '../asd';
  
@Injectable({
  providedIn: 'root'
})
export class delgmsg {
  private url = gb.apiURL+'/api/deletedeskmessage';
  
  
   
  constructor(private httpClient: HttpClient) { }
  
  getgroups(userid:any){
    
    return this.httpClient.delete(this.url,{params:userid});
  }
}
