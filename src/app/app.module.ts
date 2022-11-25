import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';
import { GuideComponent } from './guide/guide.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ScreenshotsComponent, GuideComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
