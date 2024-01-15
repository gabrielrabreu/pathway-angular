import { Component } from '@angular/core';
import { IntertionalizationService } from 'src/app/core/internationalization/intertionalization.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent { 
    constructor(
        private intertionalizationService: IntertionalizationService
    ) {}

    get home(): string {
        return this.intertionalizationService.translate('home.title');
    }
}
