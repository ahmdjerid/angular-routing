import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  idserverToUpdate = 0;
  constructor(private serversService: ServersService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      (param: Params) => {
        this.idserverToUpdate = param['id'];
      }
    );

    this.server = this.serversService.getServer(+this.idserverToUpdate);
    if (this.server) {
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    }


  }

  onUpdateServer() {

    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
  }

}
