import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-practic',
  templateUrl: './practic.component.html',
  styleUrls: ['./practic.component.css']
})
export class PracticComponent implements OnInit {

    heroes:any[] = []
    termino:string[]=[]

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService: HeroesService,

               ) {

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.termino =params['termino'];
      this.heroes =this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes)
    })
  }

}
