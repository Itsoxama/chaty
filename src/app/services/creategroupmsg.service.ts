import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { gb } from '../asd';
  
@Injectable({
  providedIn: 'root'
})
export class creategroupmsg {
  private url = gb.apiURL+'/api/deskmsg';
  
  
   
  constructor(private httpClient: HttpClient) { }
  
  createuser(hero:any){
    return this.httpClient.post(this.url,hero);
  }
}
