import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SetupDependenciesComponent } from './setup/setup-dependencies/setup-dependencies.component';
import { SetupExtendComponent } from './setup/setup-extend/setup-extend.component';
import { SetupFinishComponent } from './setup/setup-finish/setup-finish.component';
import { SetupInventoryComponent } from './setup/setup-inventory/setup-inventory.component';
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
  },
  { path: 'dashboard', component: DashboardComponent,
    data: { animation: 'dashboard' }
  },
  { path: 'setup-inventory', component: SetupInventoryComponent,
    data: { animation: 'setup-inventory' }
  },
  { path: 'setup-extend', component: SetupExtendComponent,
    data: { animation: 'setup-extend' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
