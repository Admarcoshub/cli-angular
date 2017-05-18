import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { FormularioComponent } from './lista/formulario/formulario.component';
import { ItemComponent } from './lista/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FormularioComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ListaComponent]
})
export class AppModule { }
