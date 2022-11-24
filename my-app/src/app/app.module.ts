import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { CourseComponent } from './course/course.component';
import { SearchComponent } from './search/search.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AddbuttonComponent } from './addbutton/addbutton.component';
import { CourselistComponent } from './courselist/courselist.component';
import { HighlightDirective } from './appHighlight.directive';
import { OrderByPipe } from './orderBy.pipe';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    SearchComponent,
    BreadcrumbsComponent,
    AddbuttonComponent,
    CourselistComponent,
    CourseComponent,
    HighlightDirective,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
