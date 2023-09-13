import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplahscreenComponent } from './splahscreen.component';

describe('SplahscreenComponent', () => {
  let component: SplahscreenComponent;
  let fixture: ComponentFixture<SplahscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplahscreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplahscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
