import {Routes} from "@angular/router";

import {Dashboard2Component} from "./views/dashboards/dashboard2.component";
import {StarterViewComponent} from "./views/appviews/starterview.component";
//import {LoginComponent} from "./views/appviews/login.component";

import {BlankLayoutComponent} from "./components/common/layouts/blankLayout.component";
import {BasicLayoutComponent} from "./components/common/layouts/basicLayout.component";
import {TopNavigationLayoutComponent} from "./components/common/layouts/topNavigationlayout.component";

export const ROUTES:Routes = [
  // Main redirect
  {path: '', redirectTo: 'dashboard2', pathMatch: 'full'},

  // App views


  {
    path: '', component: BasicLayoutComponent,
    children: [
      { path: 'dashboard2', component: Dashboard2Component },
    ]
  },
  {
    path: '', component: BlankLayoutComponent,
    children: [
      { path: 'dashboard2', component: Dashboard2Component },
    ]
  },

  // Handle all other routes
  {path: '**',  redirectTo: 'dashboard2'}
];
