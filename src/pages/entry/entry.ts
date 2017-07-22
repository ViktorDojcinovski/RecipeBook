import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

constructor(public navCtrl: NavController, public navParams: NavParams) {
	this.navCtrl = navCtrl;
	this.navParams = navParams;
}

  	recipe = {}; 
  	ingredient = {};
  	ingredients = [];

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
  		this.ingredients.push({title: this.ingredient['title'], quantity: this.ingredient['quantity']});
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
  		this.recipe['ingredients'] = this.ingredients;
    	console.log(this.recipe)
  	}

  	clearInputIngredient () {
  		this.ingredient['title'] = '';
  		this.ingredient['quantity'] = '';
  	}

}
