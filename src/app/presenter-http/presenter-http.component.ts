import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-presenter-http',
  templateUrl: './presenter-http.component.html',
  styleUrls: ['./presenter-http.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresenterHttpComponent {
  @Input() browser: any;
}
