import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card-category',
  standalone: true,
  imports: [],
  templateUrl: './card-category.component.html',
  styleUrl: './card-category.component.css'
})
export class CardCategoryComponent {
  @Input() icon!: string;
  @Input() nomeCard!: string;
}
