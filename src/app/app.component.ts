import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Premier post',
      content: 'Voici le contenu du premier post',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Second post',
      content: 'Voici le contenu du second post',
      loveIts: 2,
      created_at: new Date()
    }
  ];
}
