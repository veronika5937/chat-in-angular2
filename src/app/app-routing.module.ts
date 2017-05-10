import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { ChatsComponent } from './chats';
import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "./not-found.component";

import { AuthGuard } from "./auth";



const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: '', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'chat',  component: ChatsComponent, canActivate: [AuthGuard] },
    { path: '**', component: NotFoundComponent },


]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { preloadingStrategy: PreloadAllModules }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: []
})

export class AppRoutingModule { }
