import { Component, OnInit } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { UpdateVehicleComponent } from './components/update-vehicle/update-vehicle.component';
import { ViewVehicleComponent } from './components/view-vehicle/view-vehicle.component';
import { RemoveVehicleComponent } from './components/remove-vehicle/remove-vehicle.component';

import { Vehicle } from './shared/models/vehicle';
import { VehicleService } from './shared/services/vehicle.service';

import { masks } from '../../shared/utils/masks';
import { IntertionalizationService } from 'src/app/core/internationalization/intertionalization.service';

@Component({
    selector: 'app-vehicle-list',
    templateUrl: './vehicle-list.component.html',
    styleUrls: ['./vehicle-list.component.css'],
})
export class VehicleListComponent implements OnInit {
    public vehicles: Vehicle[] = [];
    public plateMask: string = masks.plate;
    public modalRef!: BsModalRef;

    constructor(
        private vehicleService: VehicleService,
        private modalService: BsModalService,
        private intertionalizationService: IntertionalizationService
    ) { }

    get title(): string {
        return this.intertionalizationService.translate('vehicle-list.title');
    }

    get titleBold(): string {
        return this.intertionalizationService.translate('vehicle-list.title-bold');
    }

    get add(): string {
        return this.intertionalizationService.translate('vehicle-list.add');
    }

    get plate(): string {
        return this.intertionalizationService.translate('vehicle-list.plate');
    }

    public ngOnInit(): void {
        this.loadVehicles();
    }

    public showAddVehicleModal(): void {
        this.modalRef = this.modalService.show(AddVehicleComponent);
        this.modalRef.content.onClose.subscribe(() => {
            this.loadVehicles();
        })
    }

    public showUpdateVehicleModal(vehicle: Vehicle): void {
        this.modalRef = this.modalService.show(UpdateVehicleComponent, {
            initialState: {
                vehicle: vehicle
            }
        });
        this.modalRef.content.onClose.subscribe(() => {
            this.loadVehicles();
        })
    }

    public showViewVehicleModal(vehicle: Vehicle): void {
        this.modalService.show(ViewVehicleComponent, {
            initialState: {
                vehicle: vehicle
            }
        });
    }

    public showRemoveVehicleModal(vehicle: Vehicle): void {
        this.modalRef = this.modalService.show(RemoveVehicleComponent, {
            initialState: {
                vehicle: vehicle
            }
        });
        this.modalRef.content.onClose.subscribe(() => {
            this.loadVehicles();
        })
    }

    public loadVehicles(): void {
        this.vehicleService.getAll().subscribe((vehicles) => {
            this.vehicles = vehicles;
        });
    }
}
