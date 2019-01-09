import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
* Generated class for the AutenticationPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
    selector: 'page-autentication',
    templateUrl: 'autentication.html',
})
export class AutenticationPage {

    currentPage:any;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.currentPage = "SignIn";
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AutenticationPage');
    }

    toHome(){
        this.navCtrl.push("HomePage");
    }

    toShani(){
        this.navCtrl.push("DepositPage");
    }

}
