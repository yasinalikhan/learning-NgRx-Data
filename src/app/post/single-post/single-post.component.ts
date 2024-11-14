import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post!: Post;
  constructor(
    private route: ActivatedRoute,
    private PostService: PostService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.PostService.entities$.subscribe((posts:any) => {
      this.post = posts.find((post:any) => post.id === id);
    });
  }

}
