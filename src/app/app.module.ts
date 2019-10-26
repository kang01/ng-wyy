import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';



@NgModule({
  // 依赖当前模块组件或指令、管道
  declarations: [
    AppComponent
  ],
  // 引入依赖的模块
  imports: [
    
    CoreModule
  ],
  
  // 入口的组件
  bootstrap: [AppComponent]
})
export class AppModule { }
