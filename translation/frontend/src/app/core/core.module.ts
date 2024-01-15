import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';

import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { InternationalizationModule } from './internationalization/internationalization.module';
import { NavbarModule } from './navbar/navbar.module';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '../assets/locales/', '.json');
}

@NgModule({
    exports: [NavbarModule],
    imports: [
        CommonModule,
        HttpClientModule,
        ModalModule.forRoot(),
        InternationalizationModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        ToastrModule.forRoot({
            positionClass: 'toast-bottom-center'
        }),
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
        BsModalService 
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import only in AppModule.');
        }
    }
}
