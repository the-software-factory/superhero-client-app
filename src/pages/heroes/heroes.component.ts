
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Superhero } from '../../models/superhero';
import { ClientApiService } from '../../services/client-api/client-api.service';

@Component({
  templateUrl: './heroes.template.html',
  styleUrls: [ './heroes.style.scss' ]
})
export class HeroesPage implements OnInit {

  superheroes$: Observable<Superhero[]>;

  constructor(private _clientApiService: ClientApiService) {}

  ngOnInit() {
    this.superheroes$ = this._clientApiService.getSuperheroes();
  }

}
