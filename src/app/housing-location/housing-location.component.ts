import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-housing-location',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        RouterOutlet,
    ],
    template: `
        <section class="listing">
            <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
            <h2 class="listing-heading">{{ housingLocation.name }}</h2>
            <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
            <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
        </section>
    `,
    styleUrls: ['./housing-location.component.css']
})

export class HousingLocationComponent {
    //input is similar to passing props
    @Input() housingLocation!: HousingLocation; //use ! because the input is expecting the value to be passed, there is no default value in this case. ! = non-null assertion operator >> tell ts compiler that this value won't be null or undefined

}
