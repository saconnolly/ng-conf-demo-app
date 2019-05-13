import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    BrowserAnimationsModule
  ]
})
export class MaterialModule { }
