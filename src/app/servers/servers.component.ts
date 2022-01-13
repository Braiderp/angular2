import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  status =  "No server created!!!";
  serverName="";
  username="";
  serverCreated=false;
  servers=["server 1", "server 2"]
  constructor() {
    setTimeout(() => {this.allowNewServer= true}, 2000)
   }

  ngOnInit(): void {
  }

  onCreateServer () {
    this.serverCreated = true;
    this.servers.push(`${this.serverName}`)
  }

  onUpdateServerName (e: Event) {
    this.serverName = (<HTMLInputElement>e.target).value
  }


}
