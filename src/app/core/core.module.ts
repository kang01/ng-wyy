import { NgModule, SkipSelf, Optional } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesModule } from '../services/services.module';
import { PagesModule } from '../pages/pages.module';
import { ShareModule } from '../share/share.module';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';
registerLocaleData(zh);

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    ServicesModule,
    PagesModule,
    ShareModule,
    AppRoutingModule,
  ],
  exports: [
    ShareModule,
    AppRoutingModule,
  ],
  // 服务
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class CoreModule {
  // @SkipSelf() 跳过自己的模块，去父级寻找 
  // @Optional() 当coreModule没找到的时候赋值parentModulenull
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule只能被AppModule引入')
    }
  }
}
