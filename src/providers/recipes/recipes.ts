import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RecipesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RecipesProvider {

	public allRecipes = [];

  constructor(public http: Http) {
    console.log('Hello RecipesProvider Provider');
  }



}
