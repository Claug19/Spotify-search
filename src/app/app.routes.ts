import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders }  from '@angular/core';

import { AboutComponent } from "./components/about/about.component"
import { SearchComponent } from "./components/search/search.component"
import { ArtistComponent } from "./components/artist/artist.component"
import { AlbumComponent } from "./components/album/album.component";

const appRoutes: Routes = [
    {
        path:'', 
        component: SearchComponent
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path: 'artist/:id',
        component: ArtistComponent
    },
    {
        path: 'album/:id',
        component: AlbumComponent
    }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);