
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Superhero } from '../../models/superhero';

@Component({
  templateUrl: 'create-hero.template.html'
})
export class CreateHeroPage {

  superHero: Superhero = new Superhero();

  onSubmit(form: NgForm) {
    console.log(`The form is ${form.valid ? 'VALID' : 'INVALID'}`);

    if (form.invalid) {
      return;
    }

    this.superHero.hasCloak = !!this.superHero.hasCloak;

    console.log(this.superHero);
  }

}
