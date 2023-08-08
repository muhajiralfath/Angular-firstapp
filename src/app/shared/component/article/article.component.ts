import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  articles = [
    {
      title: 'Tendangan super daniel',
      date: new Date(),
      imageUrl: 'assets/image/daniel.jpeg',
    },
    {
      title: 'Team Tidak pernah kalah',
      date: new Date(),
      imageUrl: 'assets/image/team.jpg',
    },
    // Add more articles here
  ];
}
