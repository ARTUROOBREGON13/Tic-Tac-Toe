import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BoardComponent } from './game/board/board.component';
import { SquareComponent } from './game/square/square.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardComponent, SquareComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
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
