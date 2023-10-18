
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioService } from './service/usuario.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSnackBarModule
} from '@angular/material/snack-bar';




@NgModule({
  declarations: [
   
    AppComponent
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatPaginatorModule,
    MatSnackBarModule  

  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
