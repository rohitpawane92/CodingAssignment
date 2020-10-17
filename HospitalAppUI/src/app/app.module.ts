import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatButtonModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule, StyleUtils, StylesheetMap, LayoutStyleBuilder, MediaMarshaller, ɵMatchMedia, BreakPointRegistry, PrintHook, FlexStyleBuilder, LayoutAlignStyleBuilder } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlphabetsOnlyDirective } from './directives/alphabetsonly.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AlphabetsOnlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [StyleUtils, StylesheetMap, LayoutStyleBuilder, MediaMarshaller, ɵMatchMedia, BreakPointRegistry, PrintHook, FlexStyleBuilder, LayoutAlignStyleBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
