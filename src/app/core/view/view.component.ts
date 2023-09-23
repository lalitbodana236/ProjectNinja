import { Component } from '@angular/core';
import { BrowserInfoService } from 'src/app/browser-info.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
browserInfo: string ='';
browserInfoDetails: string ='';
  constructor(private browserInfoService: BrowserInfoService) {}

  ngOnInit(): void {
    this.browserInfo = this.browserInfoService.getBrowserInfo();
  }
}
