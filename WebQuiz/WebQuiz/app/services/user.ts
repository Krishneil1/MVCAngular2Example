import {Injectable}    from "@angular/core";
import {Http} from "@angular/http";

declare var JSON: any;

@Injectable()
export class UserService {
    private apiUrl = "/api/v1/user/";

    constructor(private http: Http) { }

    get(): Promise<any> {
        const url = `${this.apiUrl}current`;
        return this.http.get(url, { body: "" })
            .toPromise()
            .then(response => JSON.parseWithDate(response.text()));
    }
}