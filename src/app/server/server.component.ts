import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [
        `
        .online {
            background-color: yellowgreen;
        }
        `
    ]
})
export class ServerComponent {
id: number = Math.random();
status: string = "";   

constructor() {
    this.status = Math.random() > .5 ? "Online" : "Offline";
}

isOnline() {
    return this.status === "Online"
}
getColor(){
    return this.status === "Online" ? "yellowgreen" : "red"
}
}
