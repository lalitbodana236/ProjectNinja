import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  readonly APP_NAME = 'Gurukul';
  readonly API_BASE_URL = 'http://localhost:9193';
  readonly MAX_RESULTS = 10;
  readonly USER_IFO = 'userInfo';
  readonly TOKEN_KEY = 'authToken';

  constructor() {}
}
