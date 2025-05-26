import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PewComponent} from "@multi-app-in-routes/pew"
@Component({
  selector: 'lib-test',
  imports: [CommonModule ,PewComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {}
