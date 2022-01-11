import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./core/guards/auth.guard";

const routes: Routes = [
    {path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
    {
        path: 'autenticacao', 
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
        canLoad: [AuthGuard]
    },
    {
        path: "**",
        redirectTo: ''
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}