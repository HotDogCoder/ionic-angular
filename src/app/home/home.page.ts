import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    LoaderComponent, // Importa el LoaderComponent
  ],
})
export class HomePage {
  showLoader = false;
  imageSets = [
    [
      { src: 'assets/img_1.jpeg', text: 'Texto 1' },
      { src: 'assets/img_2.jpeg', text: 'Texto 2' },
    ],
    [
      { src: 'assets/img_3.jpeg', text: 'Texto 3' },
      { src: 'assets/img_4.jpeg', text: 'Texto 4' },
    ],
    [
      { src: 'assets/img_3.jpeg', text: 'Texto 5' },
      { src: 'assets/img_4.jpeg', text: 'Texto 6' },
    ],
  ];

  constructor(private router: Router) {}

  startLoader() {
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
      this.router.navigate(['/different-route']);
    }, 5000); // Simula una llamada a un API con 5 segundos de espera
  }
}
