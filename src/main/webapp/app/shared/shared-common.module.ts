import { NgModule } from '@angular/core';

import { Se436SimplestBlogSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [Se436SimplestBlogSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [Se436SimplestBlogSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Se436SimplestBlogSharedCommonModule {}
