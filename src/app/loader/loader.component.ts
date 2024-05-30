import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class LoaderComponent implements OnInit {
  @Input() imageSets: { src: string; text: string }[][] = [];
  @Input() interval: number = 2000; // Tiempo en ms entre cambios
  @Input() config: number = 0; // Selección del set de imágenes

  currentImageIndex: number = 0;
  currentSet: { src: string; text: string }[] = [];

  constructor() {}

  ngOnInit() {
    this.currentSet = this.imageSets[this.config];
    this.changeImage();
  }

  changeImage() {
    setInterval(() => {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.currentSet.length;
    }, this.interval);
  }
}
