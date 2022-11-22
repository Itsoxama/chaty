import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { gb } from '../asd';
  
@Injectable({
  providedIn: 'root'
})
export class hidefrom {
  private url = gb.apiURL+'/api/hidefrom';
  
  
   
  constructor(private httpClient: HttpClient) { }
  
  getgroups(userid:any){
    
    return this.httpClient.post(this.url,{params:userid});
  }
}
