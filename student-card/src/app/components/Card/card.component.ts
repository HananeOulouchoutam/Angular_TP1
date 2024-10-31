import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
}) 
export class CardComponent implements OnInit {

    fullName: string | null = null;
    establishment: string | null = null;
    registrationNumber: number | null = null;
    ribPersonnel: string | null = null;
    imageUrl: string | null = '';

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.fullName = params['fullName'];
            this.establishment = params['establishment'];
            this.registrationNumber = params['registrationNumber'];
            this.ribPersonnel = params['ribPersonnel'];
            this.imageUrl = params['imageUrl']
        });
    }
}
