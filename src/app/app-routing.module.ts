import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupDependenciesComponent } from './setup/setup-dependencies/setup-dependencies.component';
import { SetupFinishComponent } from './setup/setup-finish/setup-finish.component';
import { SetupNetworkComponent } from './setup/setup-network/setup-network.component';
import { SetupStorageComponent } from './setup/setup-storage/setup-storage.component';
import { SetupComponent } from './setup/setup.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, data: { animation: 'welcome' } },
  { path: 'setup', component: SetupComponent, data: { animation: 'setup' } },
  { path: 'setup-storage', component: SetupStorageComponent,
    data: { animation: 'setup-storage' }
  },
  { path: 'setup-network', component: SetupNetworkComponent,
    data: { animation: 'setup-network' }
  },
  { path: 'setup-dependencies', component: SetupDependenciesComponent,
    data: { animation: 'setup-dependencies' }
  },
  { path: 'setup-finish', component: SetupFinishComponent,
    data: { animation: 'setup-finish' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
