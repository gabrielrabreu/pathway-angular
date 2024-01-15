import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-available-languages',
    templateUrl: './available-languages.component.html'
})
export class AvailableLanguagesComponent implements OnInit {
    public availableLanguages!: string[];
    public currentLanguage!: string;
    public onClose!: Subject<string>;

    constructor(
        private bsModalRef: BsModalRef
    ) { }

    ngOnInit(): void {
        this.onClose = new Subject();
    }

    public close(): void {
        this.bsModalRef.hide();
    }

    public changeLanguage(language: string) {
        this.onClose.next(language);
        this.close();
    }
}
