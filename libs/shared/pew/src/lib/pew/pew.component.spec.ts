import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PewComponent } from './pew.component';

describe('PewComponent', () => {
  let component: PewComponent;
  let fixture: ComponentFixture<PewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
