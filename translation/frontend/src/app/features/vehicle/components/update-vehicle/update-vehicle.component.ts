import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

import { Vehicle } from '../../shared/models/vehicle';
import { VehicleService } from '../../shared/services/vehicle.service';

import { masks } from '../../../../shared/utils/masks';
import { IntertionalizationService } from 'src/app/core/internationalization/intertionalization.service';

@Component({
    selector: 'app-update-vehicle',
    templateUrl: './update-vehicle.component.html'
})
export class UpdateVehicleComponent implements OnInit {
    public form!: FormGroup;
    public vehicle!: Vehicle;
    public errors: string[] = [];
    public submitting: boolean = false;
    public plateMask: string = masks.plate;
    public onClose!: Subject<boolean>;

    constructor(
        private vehicleService: VehicleService,
        private formBuilder: FormBuilder,
        private bsModalRef: BsModalRef,
        private toastrService: ToastrService,
        private intertionalizationService: IntertionalizationService
    ) { }

    get title(): string {
        return this.intertionalizationService.translate('update-vehicle.title');
    }

    get platePlaceholder(): string {
        return this.intertionalizationService.translate('update-vehicle.plate-placeholder');
    }

    public ngOnInit(): void {
        this.form = this.formBuilder.group({
            id: [this.vehicle.id],
            plate: [this.vehicle.plate, Validators.required]
        });

        this.onClose = new Subject();
    }

    public get plate() {
        return this.form.get('plate');
    }

    public confirm(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.submitting = true;
        this.vehicle = Object.assign({}, this.vehicle, this.form.value);
        this.vehicleService.update(this.vehicle).subscribe(
            () => {
                this.toastrService.success('Vehicle successfully updated.');
                this.onClose.next(true);
                this.close();
            },
            failure => {
                this.errors = failure.errors;
                this.submitting = false;
            }
        )
    }

    public close(): void {
        this.bsModalRef.hide();
    }
}
