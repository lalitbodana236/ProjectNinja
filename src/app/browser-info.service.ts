import { Injectable } from '@angular/core';
import * as bowser from 'bowser';

@Injectable({
  providedIn: 'root'
})
export class BrowserInfoService {

 constructor() {}

  getBrowserInfo():  { Browser: string; OS: string } {
    const browser = bowser.getParser(window.navigator.userAgent);
    // Get the browser name and version
    const browserName = browser.getBrowserName();
    const browserVersion = browser.getBrowserVersion();

    // Get the operating system
    const osName = browser.getOSName();

   // const browserInfo = `Browser: ${browserName} ${browserVersion}, OS: ${osName}`;

    // Create an object with browser and OS properties
  const browserInfo = {
    Browser: `${browserName} ${browserVersion}`,
    OS: osName,
  };
  
  
  return browserInfo;
  }

}
