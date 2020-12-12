import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupStorageComponent } from './setup/setup-storage/setup-storage.component';
import { SetupComponent } from './setup/setup.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, data: { animation: 'welcome' } },
  { path: 'setup', component: SetupComponent, data: { animation: 'setup' } },
  { path: 'setup-storage', component: SetupStorageComponent,
    data: { animation: 'setup-storage' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
