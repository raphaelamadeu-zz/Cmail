import { NgModule } from "@angular/core";
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module';
import { LogoutComponent } from './components/logout/logout.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  exports: [LogoutComponent]
})
export class AppModule {}