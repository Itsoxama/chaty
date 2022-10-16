import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { gb } from '../asd';
  
@Injectable({
  providedIn: 'root'
})
export class allowedservice {
  private url = gb.apiURL+'/allowed';
  
  
   
  constructor(private httpClient: HttpClient) { }
  
  accept(hero:any){
    return this.httpClient.post(this.url,hero);
  }
}
