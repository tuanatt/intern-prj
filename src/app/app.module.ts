import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { CardsComponent } from './components/cards/cards.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { VideoComponent } from './pages/video/video.component';
import { ReportPageComponent } from './components/report-page/report-page.component';
import { FirstWeekComponent } from './pages/first-week/first-week.component';
import { SecondWeekComponent } from './pages/second-week/second-week.component';


@NgModule({
  declarations: [	
    AppComponent, ComponentsComponent, CardsComponent, SidebarComponent, PagesComponent, DashboardComponent, 
    ResumeComponent, PresentationComponent, AboutMeComponent, AboutMePageComponent, VideoComponent, ReportPageComponent, FirstWeekComponent, SecondWeekComponent,
  //SidebarComponent
   ],
  imports: [
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
