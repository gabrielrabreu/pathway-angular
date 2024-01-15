import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { AvailableLanguagesComponent } from '../internationalization/available-languages/available-languages.component';

@NgModule({
    declarations: [NavbarComponent, AvailableLanguagesComponent],
    imports: [CommonModule, RouterModule],
    exports: [NavbarComponent],
})
export class NavbarModule { }
