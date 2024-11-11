import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-text',
  standalone: true,
  imports: [],
  templateUrl: './blog-text.component.html',
  styleUrl: './blog-text.component.css'
})
export class BlogTextComponent {
  navigateTo(event:MouseEvent,topicId: string) {
    // Previne o comportamento padrão do link
    event!.preventDefault();
    event!.stopPropagation();

    // Faz a rolagem suave para o tópico específico
    const element = document.getElementById(topicId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}