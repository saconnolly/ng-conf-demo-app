import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from '../services/sockets';
import { HttpService } from '../services/http';
import { DeviceDetectorService } from 'ngx-device-detector';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-container-ws',
  templateUrl: './container-ws.component.html',
  styleUrls: ['./container-ws.component.css']
})
export class ContainerWsComponent implements OnInit, OnDestroy {
  browserDataObj: object;
  browserDataArray: Array<object> = [];
  ioConnection: any;
  subsink = new SubSink();

  constructor(
    private _socketService: SocketService,
    private _deviceDetector: DeviceDetectorService
  ) { }

  ngOnInit() {
    this.subsink.sink = this._socketService.stateChanged.subscribe(state => {
      if (state) {
        this.browserDataObj = state.browserData;
        this.browserDataArray = [];
        const props = Object.keys(this.browserDataObj);
        for (const prop of props) {
          this.browserDataArray.push({[prop] : this.browserDataObj[prop]});
        }
      }
    });
  }

  sendBrowserData(): void {
    this._socketService.emitToSocket(this._deviceDetector.browser);
  }

  ngOnDestroy() {
    this.subsink.unsubscribe();
  }
}
