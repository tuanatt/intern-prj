import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { LockbitHistoryComponent } from './pages/lockbit-history/lockbit-history.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { VideoComponent } from './pages/video/video.component';
import { ReportPageComponent } from './components/report-page/report-page.component';
import { FirstWeekComponent } from './pages/first-week/first-week.component';
import { SecondWeekComponent } from './pages/second-week/second-week.component';

const routes = [
  {path: '', component: DashboardComponent},
  {path: 'about-me', component: AboutMePageComponent},
  {path: 'chocolate', component: LockbitHistoryComponent},
  {path: 'report-page', component: ReportPageComponent},
  {path: 'oneslider', component: VideoComponent},
  {path: 'first-week', component: FirstWeekComponent},
  {path: 'second-week', component: SecondWeekComponent}
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
  ]
})
export class AppRoutingModule { }
