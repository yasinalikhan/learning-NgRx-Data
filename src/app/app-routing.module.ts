import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { AddPostComponent } from './post/add-post/add-post.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { SinglePostComponent } from './post/single-post/single-post.component';
import { PostsResolver } from './post/posts.resolver';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'posts',
    component:PostListComponent,
    resolve: { posts: PostsResolver },
  },
  {
    path:'posts/add',
    component:AddPostComponent
  },
  {
    path:'posts/edit/:id',
    component:EditPostComponent
  },
  {
    path:'posts/details/:id',
    component:SinglePostComponent,
    resolve: { posts: PostsResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
