import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pianoApp';

  playSound(songNumber: number) {
    const audio = new Audio();
    audio.src = `../assets/sounds/note${songNumber}.wav`;
    audio.load();
    audio.play();
  }
}
