import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollGestemdChildComponent } from './poll-gestemd-child.component';

describe('PollGestemdChildComponent', () => {
  let component: PollGestemdChildComponent;
  let fixture: ComponentFixture<PollGestemdChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollGestemdChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollGestemdChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
