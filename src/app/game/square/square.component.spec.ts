import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareComponent } from './square.component';
import { By } from '@angular/platform-browser';

describe('SquareComponent', () => {
  let component: SquareComponent;
  let fixture: ComponentFixture<SquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct value', () => {
    component.value = 'X';
    fixture.detectChanges();
    const buttonElement: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.textContent).toContain('X');
  });

  it('should add the correct CSS class based on the value', () => {
    component.value = 'X';
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.classes['x']).toBeTrue();

    component.value = 'O';
    fixture.detectChanges();
    expect(buttonElement.classes['o']).toBeTrue();
  });

  it('should disable the button if it has a value', () => {
    component.value = 'X';
    fixture.detectChanges();
    const buttonElement: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.disabled).toBeTrue();

    component.value = null;
    fixture.detectChanges();
    expect(buttonElement.disabled).toBeFalse();
  });
});
