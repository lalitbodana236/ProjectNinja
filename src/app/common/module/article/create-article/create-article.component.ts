import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AuthService } from 'src/app/auth.service';
import { IPost } from 'src/app/interface/IPost';
@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css'],
})
export class CreateArticleComponent {
  //public Editor: any = ClassicEditor;
  public Editor: any = ClassicEditor;
  public post: IPost;

  // public editorConfig = {
  //   toolbar: [
  //     'heading',
  //     '|',
  //     'bold',
  //     'italic',
  //     'link',
  //     '|',
  //     'bulletedList',
  //     'numberedList',
  //     'blockQuote',
  //   ],
  //   language: 'en',
  //   removePlugins: ['EasyImage'], // Remove EasyImage plugin, which includes the powered by link
  //   // Add more configuration options as needed
  // };

  constructor(private authService: AuthService, private router: Router) {
    this.post = {
      title: '',
      content: '',
      tags: [],
      status: '',
      featured: false,
      attachments: [],
    };
  }

  onEditorChange(event: any) {
    console.log('Editor content:', event);
  }

  write() {
    console.log('Adding new post:', this.post);
    // Assuming you have a service to add the post, you can call it here
    // this.postService.addPost(this.newPost).subscribe(response => {
    //   console.log('Post added successfully:', response);
    // });
  }
}
