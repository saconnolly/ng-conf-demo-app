import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerWsComponent } from './container-ws.component';

describe('ContainerWsComponent', () => {
  let component: ContainerWsComponent;
  let fixture: ComponentFixture<ContainerWsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerWsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerWsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
