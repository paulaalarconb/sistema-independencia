import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';

import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { QnaComponent } from './qna/qna.component';
import { HomeComponent } from './home/home.component';
import { PersonaComponent } from './persona/persona.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';


import { PersonaCrearComponent } from './persona-crear/persona-crear.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {  MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import {  MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    QuienesSomosComponent,
    QnaComponent,
    HomeComponent,
    PersonaComponent,
    PersonaCrearComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCardModule,
    MatGridListModule,
    MatDatepickerModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatNativeDateModule,

  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'accent' },
    }
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],

})
export class CoreModule {

}
