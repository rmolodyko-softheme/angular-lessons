import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  petName = 'Tuzik';

  // @HostListener('mousemove')
  // mouseMove() {
  //   console.log('mouse moved');
  // }

  constructor() {
    setTimeout(() => this.petName = 'Sharik', 4000);
  }

  getPetName() {
    // for(let i = 0; i <= 1000000000; i++) {}

    console.log('Call get value');
    return this.petName;
  }
}
