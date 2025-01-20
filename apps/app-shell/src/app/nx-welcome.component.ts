import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-mf-nx-welcome',
  imports: [CommonModule],
  template: `<h1>Welcome to Nx!</h1>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
