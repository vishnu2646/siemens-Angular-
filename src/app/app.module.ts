import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeadercontentComponent } from './components/headercontent/headercontent.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailComponent } from './components/detail/detail.component';
import { NgxPaginationModule } from 'ngx-pagination'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { apiService } from './services/api.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadercontentComponent,
    FooterComponent,
    DetailComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [apiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
