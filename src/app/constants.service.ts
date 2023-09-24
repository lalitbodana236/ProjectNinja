import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
   readonly APP_NAME = 'MyApp';
  readonly API_BASE_URL = 'https://api.example.com';
  readonly MAX_RESULTS = 10;
   readonly USER_IFO = 'userInfo';
  readonly TOKEN_KEY = 'authToken';

  constructor() { }
}
