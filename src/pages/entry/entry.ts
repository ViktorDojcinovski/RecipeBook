import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RecipesProvider } from '../../providers/recipes/recipes';

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
export class EntryPage {s


	/**
	* Instantiata FormGroup object for keeping control over inserted values in the model-template form.
	*/
	private recipe : FormGroup;
	/**
	* Empty array for keeping the ingredients added for this recipe.
	*/
	private ingredients = [];

	submitAttempt: boolean = false;


constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public recipesProvider: RecipesProvider) {
	this.navCtrl = navCtrl;
	this.navParams = navParams;
	this.recipesProvider = recipesProvider;

	this.recipe = this.formBuilder.group({
		title: ['', Validators.compose([Validators.minLength(5), Validators.required])],
      	source: [''],
      	ingredientTtl: ['', Validators.minLength(1)],
      	ingredientQnt: ['', Validators.minLength(1)],
      	prepTimeH: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]')])],
      	prepTimeM: ['', Validators.compose([Validators.required, Validators.pattern('[0-5]?[0-9]')])],
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
	* Insert ingredient into the ingredients array.
	*
	*/
  	saveIngredient() {
  		this.ingredients.push({title: this.recipe.value.ingredientTtl, quantity: this.recipe.value.ingredientQnt});
  		this.clearInputIngredient();
  	}

   /**
	* Remove ingredient from the ingredients array.
	*
	* param integer i
	*/
  	removeIngredient(i) {
  		this.ingredients.splice(i , 1);
  	}

  	/**
  	*
	* Save the recipe with the form parametars inserted.
	* The ingredients array is appended to the model of the FormGroup.
	* Then preserve the value to the array, member of the Provider(Service) injected
	*
	*/
  	logForm() {

  		this.submitAttempt = true;

  		this.recipe.value['ingredients'] = this.ingredients;
  		delete this.recipe.value['ingredientQnt'];
  		delete this.recipe.value['ingredientTtl'];

  		if(this.recipe.valid && this.recipe.value.ingredients.length > 0){

    		this.recipesProvider.allRecipes.push(this.recipe.value);

    		console.log(this.recipesProvider);

    		this.navCtrl.setRoot(ListPage);
  		}
  	}

  	/**
  	*
	* Reset to empty form fields for inserting the ingredient title
	* and for ingredient quantity or ingredientTtl and ingredientQnt respectivly.
	*
	*/
  	clearInputIngredient () {
  		(this.recipe.controls['ingredientTtl']).setValue('', { onlySelf: true });
  		(this.recipe.controls['ingredientQnt']).setValue('', { onlySelf: true });
  	}

}
