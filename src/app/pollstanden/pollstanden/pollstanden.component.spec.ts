import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollstandenComponent } from './pollstanden.component';

describe('PollstandenComponent', () => {
  let component: PollstandenComponent;
  let fixture: ComponentFixture<PollstandenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollstandenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollstandenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
