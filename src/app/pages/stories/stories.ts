import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})

export class Stories {
  stories = [
    
    {
      title: "Dragon Ball",
      author: "Toriyama",
      year: 1984,
      genre: "Action, Adventure, Fantasy",
      views: 100000,
      image: "https://www.bing.com/th/id/OIP.4CeYtVQ1oUqbnWbqbq-YjwHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
    },
    {
      title: "Attack on Titan",
      author: "Isayama",
      year: 2009,
      genre: "Action, Dark Fantasy, Post-Apocalyptic",
      views: 600000,
      image: "https://thf.bing.com/th/id/OIP.lDvs8YoY1mThIAvA-7-97gHaDt?w=346&h=180&c=7&r=0&o=7&cb=thfc1falcon4&dpr=1.3&pid=1.7&rm=3",
    },
    {
      title: "Bleach",
      author: "Kubo",
      year: 2001,
      genre: "Action, Adventure, Supernatural",
      views: 500000,
      image: "https://thf.bing.com/th/id/OIP.uoeJXNJIbKGY8pZdwFz3qwHaDt?w=332&h=180&c=7&r=0&o=7&cb=thfc1falcon4&dpr=1.3&pid=1.7&rm=3"
    },
  ];
}
