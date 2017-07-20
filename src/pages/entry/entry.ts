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

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntryPage');
  }

  listRecipies() {
  	this.navCtrl.setRoot(ListPage);
  }

}
