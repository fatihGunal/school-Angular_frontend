import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollAanmaakComponent } from './poll-aanmaak.component';

describe('PollAanmaakComponent', () => {
  let component: PollAanmaakComponent;
  let fixture: ComponentFixture<PollAanmaakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollAanmaakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollAanmaakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
