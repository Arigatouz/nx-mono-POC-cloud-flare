import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [ RouterModule],
  selector: 'ng-mf-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-shell';

  saveJwt() {
    localStorage.setItem('jwt', 'zeo el neo el pew el heo el  neo el');
  }
}
