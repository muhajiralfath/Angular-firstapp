import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNotfoundComponent } from './component-notfound.component';

describe('ComponentNotfoundComponent', () => {
  let component: ComponentNotfoundComponent;
  let fixture: ComponentFixture<ComponentNotfoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentNotfoundComponent]
    });
    fixture = TestBed.createComponent(ComponentNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
