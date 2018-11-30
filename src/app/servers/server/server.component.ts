import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
    private activateRoute: ActivatedRoute,
    private route: Router) { }


  ngOnInit() {
    this.activateRoute.params.subscribe(
      (params: Params) => { this.server = this.serversService.getServer(+params['id']); }
    );
  }
  onEdit() {
    this.route.navigate(['servers', this.server.id, 'edit'], { queryParamsHandling: 'preserve' });
  }

}
