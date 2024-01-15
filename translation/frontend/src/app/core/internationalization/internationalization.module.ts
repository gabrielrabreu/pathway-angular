
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

import { IntertionalizationService } from './intertionalization.service';

@NgModule({
    imports: [CommonModule, HttpClientModule, TranslateModule.forChild()],
    exports: [TranslateModule]
})
export class InternationalizationModule {
    public static forRoot(): ModuleWithProviders<InternationalizationModule> {
        return {
            ngModule: InternationalizationModule,
            providers: [
                {
                    provide: APP_INITIALIZER,
                    useFactory: initLocalizationService,
                    deps: [IntertionalizationService],
                    multi: true
                },
                IntertionalizationService
            ]
        };
    }
}

export function initLocalizationService(service: IntertionalizationService) {
    return () => service.initService();
}
