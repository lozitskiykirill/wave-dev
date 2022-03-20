import {Component, Input, OnInit} from '@angular/core';
import {Feedback} from "../../../interfaces/Feedback";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})

export class FeedbackComponent implements OnInit {
  imgReplySrc:any = 'assets/images/icons/reply.svg';
  imgEditSrc:any = 'assets/images/icons/edit.svg';
  imgCrossSrc:any = 'assets/images/icons/cross.svg';
  imgLikeSrc:any = 'assets/images/icons/like.svg';

  @Input() feedbackData!: Feedback;

  likes: number = 0;
  dislikes: number = 0;

  feedback: any;
  respond: boolean = true;
  edit: boolean = true;
  delete: boolean = true;
  bigMessage: boolean = true;

  liked: boolean = false;
  disliked: boolean = false;
  isLongText: boolean = false;

  description: string = '';
  descriptionLength: number = 208;
  longDescriptionButtonText: string = '';


  constructor() {
  }

  ngOnInit(): void {
    this.fetchFeedback();
    this.description = this.feedback.description;
    if (this.description.length > this.descriptionLength) {
      this.description = this.description.substr(0, this.descriptionLength);
      this.longDescriptionButtonText = 'Читать далее';
      this.isLongText = !this.isLongText;
    } else {
      this.description = this.feedback.description;
      this.isLongText = !this.isLongText;
    }
  }

  pressLike(name: any) {
    !this.liked ?
      this.feedback.likes = this.feedback.likes + 1 :
      this.feedback.likes = this.feedback.likes -1;
    this.liked = !this.liked;
  }

  pressDislike(name: any) {
    !this.disliked ?
      this.feedback.dislikes = this.feedback.dislikes + 1 :
      this.feedback.dislikes = this.feedback.dislikes - 1;
    this.disliked = !this.disliked;
  }

  fetchFeedback() {
    this.feedback = this.feedbackData;
  }

  changeDescriptionLength() {
    let longDescription = this.feedback.description;
    let shortDescription = this.feedback.description.substr(0, this.descriptionLength);
    this.longDescriptionButtonText = 'Свернуть';
    if (this.isLongText) {
      this.description = longDescription;
      this.longDescriptionButtonText = 'Свернуть';
    } else {
      this.description = shortDescription;
      this.longDescriptionButtonText = 'Читать далее';
    }
    this.isLongText = !this.isLongText;
  }
}
