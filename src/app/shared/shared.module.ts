import { NgModule } from '@angular/core';
import { JhipsterSharedLibsModule } from './shared-libs.module';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';

@NgModule({
  imports: [JhipsterSharedLibsModule],
  declarations: [  HasAnyAuthorityDirective],
  entryComponents: [],
  exports: [JhipsterSharedLibsModule, HasAnyAuthorityDirective]
})
export class JhipsterSharedModule {}
