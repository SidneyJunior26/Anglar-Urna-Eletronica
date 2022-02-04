import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './candidates/candidates-list/candidate-list.component';
import { CandidateRegister } from './candidates/candidates-register/candidate-register.component';
import { VoteList } from './votes/vote-list/vote-list.component';
import { VoteRegister } from './votes/vote-register/vote-register.component';

const routes: Routes = [

  {
      path: '',
      redirectTo: 'candidate',
      pathMatch: 'full'
  },
  {
    path: 'candidate',
    children: [
      {
        path: '',
        component: CandidateListComponent
      }
    ]
  },
  {
    path: 'register',
    children: [
      {
        path: '',
        component: CandidateRegister
      },
      {
        path: ':id',
        component: CandidateRegister
      }
    ]
  },
  {
    path: 'vote',
    component: VoteRegister
  },
  {
    path: 'votes',
    component: VoteList
  },
  { path: '**', redirectTo: 'candidate' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
