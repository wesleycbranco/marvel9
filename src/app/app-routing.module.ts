import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./core/guards/auth.guard";
import { MainGuard } from "./core/guards/main.guard";
import { NotFoundComponent } from "./shared/not-found/not-found.component";

const routes: Routes = [
    {
        path: 'main', 
        loadChildren: () => import('./main/main.module').then(m => m.MainModule),
        canLoad: [MainGuard]
    },
    {
        path: 'autenticacao', 
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
        canLoad: [AuthGuard]
    },
    {
        path: "**",
        component: NotFoundComponent,
        canActivate: [MainGuard]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}