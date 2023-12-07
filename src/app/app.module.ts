import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { StatsComponent } from './stats/stats.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { DailyScheduleComponent } from './daily-schedule/daily-schedule.component';
import { StudyMethodsComponent } from './study-methods/study-methods.component';
import { SkillProgressionComponent } from './skill-progression/skill-progression.component';
import { CertificationsComponent } from './certifications/certifications.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    StatsComponent,
    TechnologiesComponent,
    DailyScheduleComponent,
    StudyMethodsComponent,
    SkillProgressionComponent,
    CertificationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
