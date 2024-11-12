import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() textToPagination!:string;
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  onNext() {
    this.next.emit();
  }

  onPrevious() {
    this.previous.emit();
  }
}
