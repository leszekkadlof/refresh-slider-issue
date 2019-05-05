import {Component} from '@angular/core';

@Component({
               selector   : 'app-home',
               templateUrl: 'home.page.html',
               styleUrls  : ['home.page.scss'],
           })
export class HomePage {
    list: string[] = [];

    constructor() {
        for (let x = 0; x < 50; x++) {
            this.list.push('' + x);
        }
    }
}
