import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import data from './wifidata';

@Component({
  selector: 'page-list',
  templateUrl: 'wifilist.html'
})
export class WifiListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 0; i < data.wifis.length; i++) {
      this.items.push({
        title: data.wifis[i].ssid,
        note: data.wifis[i].password,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(WifiListPage, {
      item: item
    });
  }
}
