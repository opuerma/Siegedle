import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassicComponent } from './classic/classic.component';
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
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { ViewOperatorsComponent } from './view-operators/view-operators.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassicComponent,
    FooterComponent,
    HeaderComponent,
    IntroductionComponent,
    SearchBarComponent,
    TableOperatorsComponent,
    SearchListComponent,
    GameCompleteComponent,
    HowToPlayComponent,
    ViewOperatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServiceOperatorsService,
    ServiceGeneralFunctionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
