import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KdsViewOrdersComponent } from './kds-view-orders.component';

describe('KdsViewOrdersComponent', () => {
  let component: KdsViewOrdersComponent;
  let fixture: ComponentFixture<KdsViewOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KdsViewOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KdsViewOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
