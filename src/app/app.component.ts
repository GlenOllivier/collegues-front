import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styles: []
})
export class AppComponent {
  title = 'collegues-front';
  
  images = [1, 2, 3].map(() => `https://picsum.photos/1200/500?random&t=${Math.random()}`);
}
