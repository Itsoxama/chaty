import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { gb } from '../asd';
  
@Injectable({
  providedIn: 'root'
})
export class LastService {
  private url = gb.apiURL+'/api/updatetime';
  
  
   
  constructor(private httpClient: HttpClient) { }
  
  updatelastactive(hero:any){
    return this.httpClient.post(this.url,hero);
  }
}
