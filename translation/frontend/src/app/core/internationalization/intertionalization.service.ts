import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable()
export class IntertionalizationService {
    private _localeId: string = 'en-US';

    constructor(
        private translateService: TranslateService
    ) { }

    public useLanguage(lang: string): Promise<void> {
        this.translateService.setDefaultLang(lang);
        this._localeId = lang;
        localStorage.setItem('language', lang);
        
        return this.translateService
            .use(lang)
            .toPromise()
            .catch(() => {
                throw new Error('IntertionalizationService.init failed');
            });
    }

    public initService(): Promise<void> {
        this._localeId = localStorage.getItem('language') || this._localeId;
        return this.useLanguage(this._localeId);
    }

    public translate(key: string | string[], interpolateParams?: object): string {
        return this.translateService.instant(key, interpolateParams) as string;
    }

    get language(): string {
        return this._localeId;
    }

    get availableLanguages(): string[] {
        return ['en-US', 'es-ES', 'pt-BR'];
    }
}
