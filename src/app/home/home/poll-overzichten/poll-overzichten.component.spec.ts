import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollOverzichtenComponent } from './poll-overzichten.component';

describe('PollOverzichtenComponent', () => {
  let component: PollOverzichtenComponent;
  let fixture: ComponentFixture<PollOverzichtenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollOverzichtenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollOverzichtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
