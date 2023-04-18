import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClassicComponent } from './classic/classic.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './classic/introduction/introduction.component';
import { SearchBarComponent } from './classic/search-bar/search-bar.component';
import { TableOperatorsComponent } from './classic/table-operators/table-operators.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchListComponent } from './classic/search-bar/search-list/search-list.component';
import { GameCompleteComponent } from './classic/game-complete/game-complete.component';
import { ServiceOperatorsService } from './service-operators.service';
import { ServiceGeneralFunctionsService } from './service-general-functions.service';
import { ServiceDailyOperatorService } from './service-daily-operator.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClassicComponent,
    PageNotFoundComponent,
    FooterComponent,
    HeaderComponent,
    IntroductionComponent,
    SearchBarComponent,
    TableOperatorsComponent,
    SearchListComponent,
    GameCompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServiceOperatorsService,
    ServiceGeneralFunctionsService,
    ServiceDailyOperatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
