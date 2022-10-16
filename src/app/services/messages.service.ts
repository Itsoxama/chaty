import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { gb } from '../asd';
  
@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private url = gb.apiURL+'/api/getchats';
  
  
   
  constructor(private httpClient: HttpClient) { }
  
  getmessages(){
    return this.httpClient.get(this.url);
  }
}
