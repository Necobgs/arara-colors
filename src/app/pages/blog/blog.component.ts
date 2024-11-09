import { Component } from '@angular/core';
import { BlogTextComponent } from '../../components/blog-text/blog-text.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BlogTextComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
