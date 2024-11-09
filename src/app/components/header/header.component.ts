import { Component, Inject } from '@angular/core';
import { Category } from '../../../api/models/interfaces/category';
import { CategoryService } from '../../../api/services/category.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  categorias!:Category[];

  constructor(private categoryService:CategoryService){}
  ngOnInit(){
    this.categoryService.getAll().subscribe((dado) => {
      this.categorias = dado;
    })
  }
}
