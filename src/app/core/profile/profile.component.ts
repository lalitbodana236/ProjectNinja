import { Component } from '@angular/core';
import { BrowserInfoService } from 'src/app/browser-info.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  browserInfo: string ='';

  constructor(private browserInfoService: BrowserInfoService) {}

  ngOnInit(): void {
   // this.browserInfo = this.browserInfoService.getBrowserInfo();
  }
}
