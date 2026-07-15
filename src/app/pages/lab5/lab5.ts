import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Story {
  id: number;
  title: string;
  author: string;
  views: number;
  year?: string;
  genre?: string;
  image?: string;
}
@Component({
  selector: 'app-lab5',
  imports: [],
  templateUrl: './lab5.html',
  styleUrl: './lab5.css',
})


export class Lab5 {
  stories: Story[] = [];
  loading: boolean = false;
  error: string = '';
  deletingId: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchStories();
  }

  fetchStories() {
    this.loading = true;
    this.error = '';
    this.http.get<Story[]>('http://localhost:3000/stories').subscribe({
      next: (data) => {
        this.stories = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Lấy dữ liệu thất bại';
        this.loading = false;
      },
    });
  }

  deleteStory(id: number) {
    if (!confirm('Bạn chắc chắn muốn xóa?')) return;
    this.deletingId = id;
    this.http.delete(`http://localhost:3000/stories/${id}`).subscribe({
      next: () => {
        this.stories = this.stories.filter((s) => s.id !== id);
        this.deletingId = null;
      },
      error: () => {
        this.error = 'Xóa thất bại';
        this.deletingId = null;
      },
    });
  }

  trackById(_: number, item: Story) {
    return item.id;
  }
}


