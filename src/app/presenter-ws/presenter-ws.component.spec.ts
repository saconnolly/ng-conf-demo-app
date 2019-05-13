import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenterWsComponent } from './presenter-ws.component';

describe('PresenterWsComponent', () => {
  let component: PresenterWsComponent;
  let fixture: ComponentFixture<PresenterWsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenterWsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenterWsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
