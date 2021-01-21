import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class ChartService {

    constructor(private http: HttpClient) {
        
    }

    getUserRegistrationChartData() {
        return this.http.get('http://localhost:3000/users/chart/registration');
    }

    getUserCount() {
        return this.http.get('http://localhost:3000/users/count');
    }
}