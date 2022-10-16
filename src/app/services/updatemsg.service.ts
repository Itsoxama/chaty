import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { gb } from '../asd';
  
@Injectable({
  providedIn: 'root'
})
export class updatemsg {
  private url = gb.apiURL+'/api/updatemsg';
  
  
   
  constructor(private httpClient: HttpClient) { }
  
  createdesk(deskspace:any){
    console.log(deskspace)
    return this.httpClient.post(this.url,{params:deskspace});
  }
}
