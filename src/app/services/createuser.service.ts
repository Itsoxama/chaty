import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { gb } from '../asd';
  
@Injectable({
  providedIn: 'root'
})
export class createuser {
  private url = gb.apiURL+'/api/user';
  
  
   
  constructor(private httpClient: HttpClient) { }
  
  createuser(hero:any){
    return this.httpClient.post(this.url,hero);
  }
}
