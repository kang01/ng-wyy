import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { WyUiModule } from './wy-ui/wy-ui.module';



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    WyUiModule
  ],
  exports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    WyUiModule
  ]
})
export class ShareModule { }
