import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { gb } from '../asd';
  
@Injectable({
  providedIn: 'root'
})
export class inviteservive {
  private url = gb.apiURL+'/invite';
  
  
   
  constructor(private httpClient: HttpClient) { }
  
  accept(hero:any){
    return this.httpClient.post(this.url,hero);
  }
}
