import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit {

  text: string;
  image: string;
  @Input('homeBannerText') homeBannerText = '';
  @Input('homeBannerImage') homeBannerImage = '';

  constructor() {
    this.text = this.homeBannerText;
    this.image = this.homeBannerImage;
  }

  ngOnInit(): void {
    this.text = this.homeBannerText;
    this.image = this.homeBannerImage;
  }

}
