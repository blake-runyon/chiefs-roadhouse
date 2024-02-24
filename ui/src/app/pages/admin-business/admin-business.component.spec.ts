import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBusinessComponent } from './admin-business.component';

describe('AdminBusinessComponent', () => {
  let component: AdminBusinessComponent;
  let fixture: ComponentFixture<AdminBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBusinessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
