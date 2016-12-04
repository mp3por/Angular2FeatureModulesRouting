import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { TransactionsComponent } from './transactions.component';

const routes: Routes = [
    { path: 'transactions', component: TransactionsComponent }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    declarations: [],
    exports:[
        RouterModule
    ],
})
export class TransactionsRoutingModule {}
