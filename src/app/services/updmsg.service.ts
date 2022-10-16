import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { gb } from '../asd';
  
@Injectable({
  providedIn: 'root'
})
export class updmsg {
  private url = gb.apiURL+'/api/updatedeskmsg';
  
  
   
  constructor(private httpClient: HttpClient) { }
  
  createdesk(deskspace:any){
    console.log(deskspace)
    return this.httpClient.post(this.url,{params:deskspace});
  }
}
