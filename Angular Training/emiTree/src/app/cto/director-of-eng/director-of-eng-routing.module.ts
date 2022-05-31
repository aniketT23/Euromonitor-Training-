import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './../../error/error.component';
import { HrComponent } from '../directorOfEng/hr/hr.component';
import { NgModule } from '@angular/core';
import { TrainerComponent } from '../directorOfEng/trainer/trainer.component';

const routes: Routes = [
  { path: '', component: HrComponent },
  { path: 'hr', component: HrComponent },
  { path: 'trainer', component: TrainerComponent },
  {
    path: 'tl',
    loadChildren: () =>
      import('../directorOfEng/tl/tl.module').then((m) => m.TlModule),
  },
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectorOfEngRoutingModule {}
