import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

export interface Program {
  series: string;
  series_img: string;
  genre: string;
  season: number;
  episode: string;
  description: string;
  datetime: Date;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe],
  template: `
    <div class="header">
      <div class="container">
        <img src="../img/logo.svg" width="180" height="34" />
      </div>
    </div>

    <div class="main">
      <div class="container">
        <div class="content">
          <div class="row">

            <div class="col-md-3 series_img">
              <img [src]="program().series_img" />
            </div>

            <div class="col-md-6">
              <h1 class="series">{{ program().series }}</h1>
              <h2 class="episode">{{ program().episode }}</h2>
              <p class="description">{{ program().description }}</p>
            </div>

            <div class="col-md-3">
              <ul class="list-group">
                <li class="list-group-item"><span>Date:</span> {{ program().datetime | date }}</li>
                <li class="list-group-item"><span>On air:</span> {{ program().datetime | date : 'EEEE' }}</li>
                <li class="list-group-item"><span>Time:</span> {{ program().datetime | date : 'shortTime' }}</li>
                <li class="list-group-item"><span>Season:</span> {{ program().season }}</li>
                <li class="list-group-item"><span>Genre:</span> {{ program().genre }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <h3>Bolt</h3>
            <ul>
              <li>Careers</li>
              <li>Terms</li>
              <li>Help</li>
            </ul>
          </div>
          <div class="col-md-3">
            <h3>More Bolt</h3>
            <ul>
              <li>Gift Cards</li>
              <li>Trailers</li>
            </ul>
          </div>
          <div class="col-md-3">
            <h3>News</h3>
            <ul>
              <li>Blog</li>
              <li>Twitter</li>
              <li>YouTube</li>
              <li>Google+</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./global_styles.css'],
})
export class AppComponent {
  program = signal<Program>({
    series: 'Sherlock',
    series_img: '../img/sherlock.jpg',
    genre: 'Crime drama',
    season: 3,
    episode: 'The Empty Hearse',
    description:
      "Two years after his reported Reichenback Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack.  John has moved on and has a girlfriend, Mary Morstan.  Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
    datetime: new Date(2014, 11, 31, 21, 0, 0),
  });
}

bootstrapApplication(AppComponent);
