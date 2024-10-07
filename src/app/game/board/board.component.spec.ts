import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardComponent } from './board.component';
import { SquareComponent } from '../square/square.component'; // Adjust path as needed.
import { By } from '@angular/platform-browser';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardComponent, SquareComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 9 squares', () => {
    fixture.detectChanges();
    const squareElements = fixture.debugElement.queryAll(By.directive(SquareComponent));
    expect(squareElements.length).toBe(9);
  });

  it('should render squares with initial values', () => {
    component.squares = ['', 'X', 'O', '', 'X', 'O', '', '', 'X'];
    fixture.detectChanges();
    const squareElements = fixture.debugElement.queryAll(By.css('app-square'));

    expect(squareElements[1].nativeElement.textContent).toContain('X');
    expect(squareElements[2].nativeElement.textContent).toContain('O');
  });
});
