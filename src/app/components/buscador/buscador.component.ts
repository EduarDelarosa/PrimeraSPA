import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  verHeroe() {
    console.log(this.index);
    this.router.navigate(['/heroe', this.index])

  }
}
