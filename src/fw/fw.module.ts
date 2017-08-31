import { ScreenBelowLarge } from './directives/screen-below-large.directives';
import { ScreenLarge } from './directives/screen-large.directive';
import { ScreenService } from './services/screen.service';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FrameworkConfigService } from './services/framework-config.service';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { ContentComponent } from './content/content.component';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    ScreenLarge,
    ScreenBelowLarge
  ],
  providers: [FrameworkConfigService,
  ScreenService]
  ,
  exports:[
    FrameworkBodyComponent
  ]
})
export class FwModule { }
