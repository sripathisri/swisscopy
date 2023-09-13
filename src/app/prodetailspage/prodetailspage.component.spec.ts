import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdetailspageComponent } from './prodetailspage.component';

describe('ProdetailspageComponent', () => {
  let component: ProdetailspageComponent;
  let fixture: ComponentFixture<ProdetailspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdetailspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdetailspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
