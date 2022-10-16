import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { gb } from '../asd';
  
@Injectable({
  providedIn: 'root'
})
export class callv {
  private url = 'http://localhost:5000/?room=sad_2296565533/';
  
  
   
  constructor(private httpClient: HttpClient) { }
  
  getmessage(){
    
    return this.httpClient.get(this.url)
  }
}
