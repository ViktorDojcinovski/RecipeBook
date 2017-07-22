import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ListPage } from '../list/list';

/**
 * Generated class for the EntryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-entry',
  templateUrl: 'entry.html',
})
export class EntryPage {

	private recipe : FormGroup;
	private ingredients = [];

	submitAttempt: boolean = false;


constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
	this.navCtrl = navCtrl;
	this.navParams = navParams;

	this.recipe = this.formBuilder.group({
		title: ['', Validators.compose([Validators.minLength(5), Validators.pattern('[a-zA-Z0-9]*'), Validators.required])],
      	source: [''],
      	ingredientTtl: ['', Validators.minLength(3)],
      	ingredientQnt: ['', Validators.minLength(3)],
      	instructions: ['', Validators.compose([Validators.minLength(40), Validators.required])]

	});
}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad EntryPage');
  	}

  	listRecipes() {
  		this.navCtrl.setRoot(ListPage);
  	}

   /**
	* Insert ingredient into the ingredients.
	*
	*/
  	saveIngredient() {
  		this.ingredients.push({title: this.recipe.value.ingredientTtl, quantity: this.recipe.value.ingredientQnt});
  		this.clearInputIngredient();

  	}

   /**
	* Remove ingredient from the ingredients.
	*
	* param integer i
	*/
  	removeIngredient(i) {
  		this.ingredients.splice(i , 1);
  	}

  	logForm() {

  		this.submitAttempt = true;

  		this.recipe.value['ingredients'] = this.ingredients;
  		delete this.recipe.value['ingredientQnt'];
  		delete this.recipe.value['ingredientTtl'];


  		if(this.recipe.valid){

    		console.log('The form is valid, yeah!');

    		
  		}
  	}

  	clearInputIngredient () {
  		(this.recipe.controls['ingredientTtl']).setValue('', { onlySelf: true });
  		(this.recipe.controls['ingredientQnt']).setValue('', { onlySelf: true });
  	}

}
