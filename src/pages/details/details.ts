import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.navCtrl = navCtrl;
  	this.navParams = navParams;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  createNewRecipe() {
  	this.navCtrl.setRoot(EntryPage);
  }

  listRecipes() {
  	this.navCtrl.setRoot(ListPage);
  }

}
