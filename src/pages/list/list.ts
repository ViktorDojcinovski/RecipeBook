import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  createNewRecipe() {
  	this.navCtrl.setRoot(EntryPage);
  }

}
