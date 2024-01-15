import { Component } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';

import { Vehicle } from '../../shared/models/vehicle';

import { masks } from '../../../../shared/utils/masks';
import { IntertionalizationService } from 'src/app/core/internationalization/intertionalization.service';

@Component({
    selector: 'app-view-vehicle',
    templateUrl: './view-vehicle.component.html'
})
export class ViewVehicleComponent {
    public vehicle!: Vehicle;
    public plateMask: string = masks.plate;

    constructor(
        private bsModalRef: BsModalRef,
        private intertionalizationService: IntertionalizationService
    ) { }

    get title(): string {
        return this.intertionalizationService.translate('view-vehicle.title');
    }

    public close(): void {
        this.bsModalRef.hide();
    }
}
