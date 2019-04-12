import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'blog-post',
                loadChildren: './blog-post/blog-post.module#Se436SimplestBlogBlogPostModule'
            },
            {
                path: 'tag',
                loadChildren: './tag/tag.module#Se436SimplestBlogTagModule'
            },
            {
                path: 'comment',
                loadChildren: './comment/comment.module#Se436SimplestBlogCommentModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Se436SimplestBlogEntityModule {}
