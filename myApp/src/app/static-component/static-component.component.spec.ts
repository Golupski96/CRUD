import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticComponentComponent } from './static-component.component';

describe('StaticComponentComponent', () => {
  let component: StaticComponentComponent;
  let fixture: ComponentFixture<StaticComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaticComponentComponent]
    });
    fixture = TestBed.createComponent(StaticComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
