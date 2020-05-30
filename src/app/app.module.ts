import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllMaterialModule } from './material-import';
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthService  } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { SnackbarerrorComponent } from './component-services/snackbarerror/snackbarerror.component';
import {BreadcrumbModule} from 'angular-crumbs';
import { MypipePipe } from './custompipes/mypipe.pipe';




@NgModule({
  declarations: [
    AppComponent,
    SnackbarerrorComponent,
 
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AllMaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule, ReactiveFormsModule,BreadcrumbModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi:true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
