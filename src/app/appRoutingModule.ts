import { AppModule } from './app.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';


const AppRoute: Routes =
    [
        { path: '', component: HomeComponent },
        {
            path: 'servers', component: ServersComponent, children: [
                { path: ':id', component: ServerComponent },
                { path: ':id/:edit', component: EditServerComponent },
            ]
        },
        {
            path: 'users', component: UsersComponent, children: [
                { path: ':id/:name', component: UserComponent }
            ]
        },
        { path: 'notfound', component: NotFoundComponent },
        { path: '**', redirectTo: 'notfound' }

    ];

@NgModule({
    imports: [
        RouterModule.forRoot(AppRoute)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
