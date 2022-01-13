import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '', 
    component: MainComponent,
    children: [
      {
        path: '',
        component: CharacterListComponent
      },
      {
        path: 'personagem/:id',
        component: CharacterDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
