import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { gb } from '../asd';
  
@Injectable({
  providedIn: 'root'
})
export class groupmsg {
  private url = gb.apiURL+'/api/deskspaces';
  
  
   
  constructor(private httpClient: HttpClient) { }
  
  getgroupmsg(userid:any){
    
    return this.httpClient.get(this.url,{params:userid});
  }
}
