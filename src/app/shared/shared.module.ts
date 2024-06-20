import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-center-center',
    }),
  ],
  exports: [
    BrowserAnimationsModule,
    ToastrModule,
  ],
})
export class SharedModule { }
