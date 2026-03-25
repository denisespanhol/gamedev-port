import { Routes } from '@angular/router';
import { MainContent } from './main-content/main-content.component';
import { ShardSquadPage } from './pages/shard-squad-page/shard-squad-page.component';
import { SpookyWorkersPage } from './pages/spooky-workers-page/spooky-workers-page.component';
import { PongDefensePage } from './pages/pong-defense-page/pong-defense-page.component';

export const routes: Routes = [
    {
        path: '',
        component: MainContent
    },
    {
        path: 'shard-squad',
        component: ShardSquadPage
    },
    {
        path: 'spooky-workers',
        component: SpookyWorkersPage
    },
    {
        path: 'pong-defense',
        component: PongDefensePage
    }
];
