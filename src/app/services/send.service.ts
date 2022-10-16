import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { gb } from '../asd';
  
@Injectable({
  providedIn: 'root'
})
export class SendService {
  private url = gb.apiURL+'/api/message';
  
  
   
  constructor(private httpClient: HttpClient) { }
  
  postmessage(hero:any){
    return this.httpClient.post(this.url,hero);
  }
}
