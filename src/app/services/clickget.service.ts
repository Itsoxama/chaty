import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { gb } from '../asd';
  
@Injectable({
  providedIn: 'root'
})
export class clickget {
  private url = gb.apiURL+'/api/partchat';
  
  
   
  constructor(private httpClient: HttpClient) { }
  
  getmessage(room:any){
    
    return this.httpClient.get(this.url,{params:room});
  }
}
