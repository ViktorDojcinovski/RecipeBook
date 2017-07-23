import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecipesProvider } from '../../providers/recipes/recipes';

import { EntryPage } from '../entry/entry';
import { ListPage } from '../list/list';

/**
 * Generated class for the DetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public recipesProvider: RecipesProvider) {
  	this.navCtrl = navCtrl;
  	this.navParams = navParams;
  	this.recipesProvider = recipesProvider;
  }


  /**
  * Populate this array with the preserved value of the array obtained from the Provider(Service).
  */
  recipe = this.recipesProvider.allRecipes[this.navParams.get("recipeID")];
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  createNewRecipe() {
  	this.navCtrl.setRoot(EntryPage);
  }

}
