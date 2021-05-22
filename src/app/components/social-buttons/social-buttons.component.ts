import { Component, Input, OnInit } from '@angular/core';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';

import { SocialData } from 'src/app/services/data/social-data';

@Component({
  selector: 'app-social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.scss'],
})
export class SocialButtonsComponent implements OnInit {
  @Input() socialData!: SocialData;
  @Input() idComment = 0;
  @Input() idAuthor = 0;
  faComment = faComment;
  faHeart = faHeart;

  constructor() {}

  ngOnInit() {}
}
