import { Component } from '@angular/core';
import { HttpService } from '../services/http';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-container-http',
  templateUrl: './container-http.component.html',
  styleUrls: ['./container-http.component.css']
})
export class ContainerHttpComponent {
  browserDataObj: object;
  browserDataArray: Array<object> = [];

  constructor(
    private _http: HttpService,
    private _deviceDetector: DeviceDetectorService
  ) { }

  sendBrowserData(): void {
    this._http.sendBrowserData(this._deviceDetector.browser)
      .subscribe(res => {
        this.browserDataObj = res;
        this.browserDataArray = [];
        const props = Object.keys(this.browserDataObj);
        for (const prop of props) {
          this.browserDataArray.push({[prop] : this.browserDataObj[prop]});
        }
      });
  }
}
