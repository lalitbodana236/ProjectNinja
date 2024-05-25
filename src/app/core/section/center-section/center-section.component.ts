import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { IPost } from 'src/app/interface/IPost';
import { Router } from '@angular/router';

@Component({
  selector: 'app-center-section',
  templateUrl: './center-section.component.html',
  styleUrls: ['./center-section.component.css'],
})
export class CenterSectionComponent {
  users: any[] = [];

  public newPost: IPost;
  // public Editor = ClassicEditor;
  public editorData = '<p>Hello, CKEditor!</p>';
  public model = {
    editorData: '<p>Hello, world!</p>',
  };

  constructor(private authService: AuthService, private router: Router) {
    this.newPost = {
      title: '',
      content: '',
      tags: [],
      status: '',
      featured: false,
      attachments: [],
    };
  }

  ngOnInit(): void {
    //this.getAllUsers();
  }

  // Method to get all users
  getAllUsers(): void {
    this.authService.getAllUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  addPost() {
    console.log('Adding new post:', this.newPost);
    // Assuming you have a service to add the post, you can call it here
    // this.postService.addPost(this.newPost).subscribe(response => {
    //   console.log('Post added successfully:', response);
    // });
  }
}
