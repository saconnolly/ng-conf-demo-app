import { Component, OnInit } from '@angular/core';
import { SocketService } from './services/sockets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-conf-demo-app';

  constructor(private _socketService: SocketService) { }

  ngOnInit(): void {
    this.initIoConnection();
  }

  private initIoConnection(): void {
    this._socketService.initSocket();
  }
}
