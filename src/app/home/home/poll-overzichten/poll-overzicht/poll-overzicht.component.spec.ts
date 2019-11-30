import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollOverzichtComponent } from './poll-overzicht.component';

describe('PollOverzichtComponent', () => {
  let component: PollOverzichtComponent;
  let fixture: ComponentFixture<PollOverzichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollOverzichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollOverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
