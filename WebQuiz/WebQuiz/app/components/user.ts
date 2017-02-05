import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user"


@Component({
    selector: "user-component",
    templateUrl: "/partial/user",
    providers: [UserService],
    

})

export class UserComponent implements OnInit {
    users: any;
    filters: any;
    selectedFilter = null;
    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.filters = [{ name: "Email", value: "Email" }, { name: "Last Name", value: "LastName" }];
        this.selectedFilter = this.filters[0].value;
        this.userService.get().then((users) => {
            this.users = users;
            console.info(users);
        });
    }
}