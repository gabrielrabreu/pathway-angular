import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
    public getForAdvancedPie(): any {
        const dashboard = {values:[]};

        const technology = {name: '', values: [], value: 0};
        technology.name = 'Technology'
        technology.values = [
            { name: 'Cellphones & Phones', value: this.randomInteger()},
            { name: 'Computing', value: this.randomInteger()},
            { name: 'Cameras & Accessories', value: this.randomInteger()},
            { name: 'Televisions', value: this.randomInteger()}
        ];
        technology.value = technology.values.reduce((sum, current) => sum + current.value, 0);
        
        const clothing = {name: '', values: [], value: 0};
        clothing.name = 'Clothing'
        clothing.values = [
            { name: 'Shirts', value: this.randomInteger()},
            { name: 'Dresses', value: this.randomInteger()},
            { name: 'Jeans', value: this.randomInteger()}
        ];
        clothing.value = clothing.values.reduce((sum, current) => sum + current.value, 0);
        
        const homeAppliance = {name: '', values: [], value: 0};
        homeAppliance.name = 'Home Appliance'
        homeAppliance.values = [
            { name: 'Fridges', value: this.randomInteger()},
            { name: 'Stoves', value: this.randomInteger()},
            { name: 'Washing Machine', value: this.randomInteger()},
        ];
        homeAppliance.value = homeAppliance.values.reduce((sum, current) => sum + current.value, 0);

        dashboard.values = [technology, clothing, homeAppliance];

        return dashboard;
    }

    public getForStackedArea(): any[] {
        const technology = {name: '', series: [], childs: []};
        technology.name = 'Technology';
        technology.series = [
            { name: "12/2021", value: this.randomInteger() },
            { name: "01/2022", value: this.randomInteger() },
            { name: "02/2022", value: this.randomInteger() }
        ];
        technology.childs = [
            {
                name: 'Cellphones & Phones',
                series: [
                    { name: "12/2021", value: this.randomInteger() },
                    { name: "01/2022", value: this.randomInteger() },
                    { name: "02/2022", value: this.randomInteger() }
                ] 
            },
            {
                name: 'Computing',
                series: [
                    { name: "12/2021", value: this.randomInteger() },
                    { name: "01/2022", value: this.randomInteger() },
                    { name: "02/2022", value: this.randomInteger() }
                ] 
            },
            {
                name: 'Televisions',
                series: [
                    { name: "12/2021", value: this.randomInteger() },
                    { name: "01/2022", value: this.randomInteger() },
                    { name: "02/2022", value: this.randomInteger() }
                ] 
            }
        ];

        const clothing = {name: '', series: [], childs: []};
        clothing.name = 'Clothing';
        clothing.series = [
            { name: "12/2021", value: this.randomInteger(), values: [] },
            { name: "01/2022", value: this.randomInteger(), values: [] },
            { name: "02/2022", value: this.randomInteger(), values: [] }
        ];
        clothing.childs = [
            {
                name: 'Cellphones & Phones',
                series: [
                    { name: "12/2021", value: this.randomInteger(), values: [] },
                    { name: "01/2022", value: this.randomInteger(), values: [] },
                    { name: "02/2022", value: this.randomInteger(), values: [] }
                ] 
            },
            {
                name: 'Computing',
                series: [
                    { name: "12/2021", value: this.randomInteger(), values: [] },
                    { name: "01/2022", value: this.randomInteger(), values: [] },
                    { name: "02/2022", value: this.randomInteger(), values: [] }
                ] 
            },
            {
                name: 'Televisions',
                series: [
                    { name: "12/2021", value: this.randomInteger(), values: [] },
                    { name: "01/2022", value: this.randomInteger(), values: [] },
                    { name: "02/2022", value: this.randomInteger(), values: [] }
                ] 
            }
        ];

        const homeAppliance = {name: '', series: [], childs: []};
        homeAppliance.name = 'Home Appliance';
        homeAppliance.series = [
            { name: "12/2021", value: this.randomInteger(), values: [] },
            { name: "01/2022", value: this.randomInteger(), values: [] },
            { name: "02/2022", value: this.randomInteger(), values: [] }
        ];
        homeAppliance.childs = [
            {
                name: 'Cellphones & Phones',
                series: [
                    { name: "12/2021", value: this.randomInteger(), values: [] },
                    { name: "01/2022", value: this.randomInteger(), values: [] },
                    { name: "02/2022", value: this.randomInteger(), values: [] }
                ] 
            },
            {
                name: 'Computing',
                series: [
                    { name: "12/2021", value: this.randomInteger(), values: [] },
                    { name: "01/2022", value: this.randomInteger(), values: [] },
                    { name: "02/2022", value: this.randomInteger(), values: [] }
                ] 
            },
            {
                name: 'Televisions',
                series: [
                    { name: "12/2021", value: this.randomInteger(), values: [] },
                    { name: "01/2022", value: this.randomInteger(), values: [] },
                    { name: "02/2022", value: this.randomInteger(), values: [] }
                ] 
            }
        ];

        return [technology, clothing, homeAppliance];
    }

    private randomInteger() {
        return Math.floor(Math.random() * (10000 - 10 + 1)) + 10;
    }
}