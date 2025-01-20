import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-mf-nx-welcome',
  imports: [CommonModule],
  template: `
    <div class="bg-primary-dark text-black w-full">
      <p class="text-7xl text-black font-bold" #demo></p>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  @ViewChild('demo') demoElement!: ElementRef;

  ngOnInit() {
    const countDownDate = new Date('Jan 5, 2030 15:37:25').getTime();

    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.demoElement.nativeElement.innerHTML =
        days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

      if (distance < 0) {
        clearInterval(x);
        this.demoElement.nativeElement.innerHTML = 'EXPIRED';
      }
    }, 1000);
  }
}
