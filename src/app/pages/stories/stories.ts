import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

interface Story {
  id: number;
  title: string;
  author: string;
  views: string;

}

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories: Story[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Story[]>(`http://localhost:3000/stories`).subscribe({
      next: (data) => {
        console.log(data);
        this.stories = data;
      },
      error: () => {
        console.log('error');
      },
    });
  }
  
  deleteStory(id: number) {
    const confirmDelete = confirm("Bạn có chắc muốn xóa không?");
    if (!confirmDelete) return;

    this.http.delete(`http://localhost:3000/stories/${id}`).subscribe({
      next: () => {
        this.stories = this.stories.filter((story) => story.id !== id);
        alert("Xóa thành công");
      },
      error: () => {
        alert("Xóa thất bại");
      },
    });
  }
}

  
 
