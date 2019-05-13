import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-presenter-ws',
  templateUrl: './presenter-ws.component.html',
  styleUrls: ['./presenter-ws.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresenterWsComponent {
  @Input() browser: any;
}
