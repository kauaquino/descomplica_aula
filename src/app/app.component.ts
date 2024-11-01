import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

const routes: Routes = [
  {
    path: 'module1',
    loadChildren: () => import('./module1/module1.module').then(m => m.Module1Module)
  },
  {
    path: 'module2',
    loadChildren: () => import('./module2/module2.module').then(m => m.Module2Module)
  },
  {
    path: '',
    redirectTo: '/module1',
    pathMatch: 'full'
  }
];

export class AppComponent {
  title = 'descomplica_aula';
}
