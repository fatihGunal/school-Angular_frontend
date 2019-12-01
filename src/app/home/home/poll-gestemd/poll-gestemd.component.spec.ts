import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollGestemdComponent } from './poll-gestemd.component';

describe('PollGestemdComponent', () => {
  let component: PollGestemdComponent;
  let fixture: ComponentFixture<PollGestemdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollGestemdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollGestemdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
