import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss',
  standalone:true,
  imports: [CommonModule]
})
export class SquareComponent {
  @Input() value!: string | null;
}
