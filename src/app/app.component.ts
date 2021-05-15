import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SHOPPING-CART-APP';
  constructor(public translate: TranslateService) {
    translate.addLangs(['en-US', 'fr-CA']);
    const defaultLang = 'en-US';
    translate.setDefaultLang(defaultLang);
    const browserLang = translate.getBrowserCultureLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : defaultLang);
  }
}