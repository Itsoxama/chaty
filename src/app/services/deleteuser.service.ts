import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { gb } from '../asd';
  
@Injectable({
  providedIn: 'root'
})
export class deleteuser {
  private url = gb.apiURL+'/api/deleteuser';
  
  
   
  constructor(private httpClient: HttpClient) { }
  
  deluser(userid:any){
    
    return this.httpClient.delete(this.url,{params:userid});
  }
}
