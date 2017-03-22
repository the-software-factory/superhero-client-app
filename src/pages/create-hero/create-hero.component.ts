
import * as _ from 'lodash';

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

import { Superhero } from '../../models/superhero';
import { ClientApiService } from '../../services/client-api/client-api.service';

@Component({
  templateUrl: 'create-hero.template.html'
})
export class CreateHeroPage {

  superHeroFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _clientApiService: ClientApiService
  ) {
    this.superHeroFormGroup = this._formBuilder.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10)
        ])
      ],
      realName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10)
        ])
      ],
      location: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(128)
        ])
      ],
      hasCloak: [ '' ],
      picture: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(128)
        ])
      ],
      birthDate: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^\d{4,4}-\d\d\-\d\d$/)
        ])
      ]
    });
  }

  onSubmit(form: NgForm) {
    console.log(form);
    let superHero = new Superhero();

    console.log(`The form is ${this.superHeroFormGroup.valid ? 'VALID' : 'INVALID'}`);

    superHero.name = this.superHeroFormGroup.controls.name.value;
    superHero.realName = this.superHeroFormGroup.controls.realName.value;
    superHero.hasCloak = !!this.superHeroFormGroup.controls.hasCloak.value;
    superHero.location = this.superHeroFormGroup.controls.location.value;
    superHero.picture = this.superHeroFormGroup.controls.picture.value;
    superHero.birthDate = new Date(this.superHeroFormGroup.controls.birthDate.value);

    console.log('> MODEL:', _.clone(superHero));

    this._clientApiService
      .createSuperHero(superHero)
      .subscribe(
        (superHero: Superhero) => console.log('OK!', superHero),
        (error: Error) => console.log('> ERROR!', error)
      );
  }

  isInputValid(form: NgForm, inputName: string): boolean {
    if (!form) {
      return;
    }

    return form.submitted && form.control.controls[inputName].invalid;
  }

}
