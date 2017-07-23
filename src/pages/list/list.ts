import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecipesProvider } from '../../providers/recipes/recipes';
import { AlertController } from 'ionic-angular';

import { EntryPage } from '../entry/entry';
import { DetailsPage } from '../details/details';

/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public recipesProvider: RecipesProvider, public alertCtrl: AlertController) {
      this.navCtrl = navCtrl;
      this.navParams = navParams;
      this.recipesProvider = recipesProvider;
  }

  /**
  * Populate this array with the preserved value of the array obtained from the Provider(Service).
  */
  allRecipes = this.recipesProvider.allRecipes;

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  createNewRecipe() {
  	this.navCtrl.setRoot(EntryPage);
  }

  goToRecipeDetails (recipe) {
      this.navCtrl.push(DetailsPage, { recipeID: recipe });
  }

  /**
  * Handler executed after confirm deletion.
  * 
  * param integer recipeID
  *
  */
  deleteRecipe (recipeID) {
    this.recipesProvider.allRecipes.splice(recipeID, 1);
  }

  /**
  * Shows alert box after delete button is clicked.
  * 
  * param integer recipeID
  *
  */
  showPrompt(recipeID) {
    let prompt = this.alertCtrl.create({
      title: 'Are you sure?',
      message: "If you really want to delete this recipe click the Confirm button",
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: data => {
            this.deleteRecipe (recipeID);
          }
        }
      ]
    });
    prompt.present();
  }

  /**
  * Truncates a string given to a substring.
  * If third parametar is true truncates considering an end of a word.
  *
  * param string s
  * param integer n
  * param boolean useWordBoundary
  */
  truncate(s: string, n, useWordBoundary) {
    if (s.length <= n) { return s; }
    var subString = s.substr(0, n-1);
    return (useWordBoundary 
      ? subString.substr(0, subString.lastIndexOf(' ')) 
      : subString) + "...";
  }


}
