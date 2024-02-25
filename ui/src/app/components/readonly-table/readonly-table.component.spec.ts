import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlyTableComponent } from './readonly-table.component';

describe('ReadonlyTableComponent', () => {
  let component: ReadonlyTableComponent;
  let fixture: ComponentFixture<ReadonlyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadonlyTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadonlyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
