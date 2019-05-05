import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides}                    from '@ionic/angular';

@Component({
               selector   : 'app-home',
               templateUrl: 'home.page.html',
               styleUrls  : ['home.page.scss'],
           })
export class HomePage implements OnInit {
    @ViewChild('slides')
    slides: IonSlides;

    list1: string[] = [];
    list2: string[] = [];

    constructor() {
        for (let x = 0; x < 50; x++) {
            this.list1.push('Page1-' + x);
            this.list2.push('Page2-' + x);
        }
    }

    async ngOnInit() {
        await this.slides.lockSwipes(true);
    }

    async onTabChange(tabname: string) {
        console.log(`tab ${tabname} selected.`);
        switch (tabname) {
            case 'page1': {
                await this.slides.lockSwipes(false);
                await this.slides.slideTo(0);
                await this.slides.lockSwipes(true);
                break;
            }
            case 'page2': {
                await this.slides.lockSwipes(false);
                await this.slides.slideTo(1);
                await this.slides.lockSwipes(true);
                break;
            }
        }
    }
}
