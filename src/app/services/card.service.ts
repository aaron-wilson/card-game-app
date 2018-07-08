import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CardService {

  constructor(private http: HttpClient) { }

  getCards() {
    return this.http.get(`${ environment.apiBaseUrl }/cards`)
  }

  addCard(card) {
    return this.http.post(`${ environment.apiBaseUrl }/cards`, card)
  }
}
