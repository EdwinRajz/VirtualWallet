import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoComponent } from './components/dashboard/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoinService } from './service/coin.service';
import { MatCardModule } from '@angular/material/card';
import { CoinComponent } from './components/dashboard/coin/coin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    TodoComponent,
    CoinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [CoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
