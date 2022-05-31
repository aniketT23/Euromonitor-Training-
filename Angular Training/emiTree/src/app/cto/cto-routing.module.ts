import { RouterModule, Routes } from '@angular/router';

import { CheifArchitectComponent } from './cheif-architect/cheif-architect.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: CheifArchitectComponent },
  { path: 'arch', component: CheifArchitectComponent },
  {
    path: 'deo',
    loadChildren: () =>
      import('./director-of-eng/director-of-eng.module').then(
        (m) => m.DirectorOfEngModule
      ),
  },
  { path: '**', component:Error },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CtoRoutingModule {}
