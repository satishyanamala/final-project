import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopinComponent } from './shopin.component';

describe('ShopinComponent', () => {
  let component: ShopinComponent;
  let fixture: ComponentFixture<ShopinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
