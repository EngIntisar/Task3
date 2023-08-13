import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedisterComponent } from './redister.component';

describe('RedisterComponent', () => {
  let component: RedisterComponent;
  let fixture: ComponentFixture<RedisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedisterComponent]
    });
    fixture = TestBed.createComponent(RedisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
