import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sentences',
  templateUrl: './sentences.component.html',
  styleUrls: ['./sentences.component.scss']
})
export class SentencesComponent implements OnInit {

  sentences: string[];

  constructor() {
    this.sentences = [
      'The efficiency we have at removing trash has made creating trash more acceptable.',
      'Most shark attacks occur about 10 feet from the beach since that\'s where the people are.',
      'Sometimes, all you need to do is completely make an ass of yourself and laugh it off to realise that life isn’t so bad after all.',
      'They throw cabbage that turns your brain into emotional baggage.',
      'It took him a month to finish the meal.'
    ];
  }

  ngOnInit(): void {
  }

}
