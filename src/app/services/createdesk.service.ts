import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { gb } from '../asd';
  
@Injectable({
  providedIn: 'root'
})
export class createdesk {
  private url = gb.apiURL+'/api/deskspace';
  
  
   
  constructor(private httpClient: HttpClient) { }
  
  createdesk(deskspace:any){
    return this.httpClient.post(this.url,deskspace);
  }
}
