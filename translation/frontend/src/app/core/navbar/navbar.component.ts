import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { AvailableLanguagesComponent } from '../internationalization/available-languages/available-languages.component';
import { IntertionalizationService } from '../internationalization/intertionalization.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
    public modalRef!: BsModalRef;
    
    constructor(
        private intertionalizationService: IntertionalizationService,
        private modalService: BsModalService
    ) {}

    get home(): string {
        return this.intertionalizationService.translate('navbar.home');
    }

    get vehicles(): string {
        return this.intertionalizationService.translate('navbar.vehicles');
    }

    public showAvailableLanguages(): void {
        this.modalRef = this.modalService.show(AvailableLanguagesComponent, {
            initialState: {
                availableLanguages: this.intertionalizationService.availableLanguages,
                currentLanguage: this.intertionalizationService.language
            }
        });

        this.modalRef.content.onClose.subscribe(
            ( lang: string) => {
                this.intertionalizationService.useLanguage(lang)
            }
        );
    }
 }
