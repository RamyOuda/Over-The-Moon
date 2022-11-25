import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideComponent } from './guide/guide.component';
import { HomeComponent } from './home/home.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'screenshots', component: ScreenshotsComponent },
  { path: 'guide', component: GuideComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
