import { Injectable } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';

import * as socketIo from 'socket.io-client';
import { ObservableStore } from '../observable-store/observable-store';

const SERVER_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class SocketService extends ObservableStore<any> {
    private socket;

    constructor() { super({ trackStateHistory: true })}

    public initSocket(): void {
        this.socket = socketIo(SERVER_URL);
        this.socket.on('browser-data', (data: any) => {
          this.setState({ browserData: data }, 'NewData');
        });
    }

    public emitToSocket(data: any): void {
      this.socket.emit('new-browser-data', data);
    }
}
