import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  certifs: any[] = [
    {
      type: 'certif',
      link:'http://ude.my/UC-1d967979-b0d0-4426-96a6-6dbbb370fe93',
      src: 'assets/images/p1.jpg'
    },
    {
      type: 'certif',
      link:'https://www.coursera.org/account/accomplishments/certificate/5WN2H4V3EHQ3',
      src: 'assets/images/p2.jpg'
    },
    {
      type: 'certif',
      link:'https://www.coursera.org/account/accomplishments/certificate/YM867HWYHERN',
      src: 'assets/images/p3.jpg'
    },
    {
      type: 'certif',
      link:'https://www.coursera.org/account/accomplishments/certificate/N22FTC4J7BAN',
      src: 'assets/images/p4.jpg'
    },
    {
      type: 'certif',
      link:'https://www.coursera.org/account/accomplishments/certificate/KJLKY8DZFKNY',
      src: 'assets/images/p5.jpg'
    },
    {
      type: 'certif',
      link:'https://www.coursera.org/account/accomplishments/certificate/FBNH2YUC8VYR',
      src: 'assets/images/p6.jpg'
    },
    {
      type: 'certif',
      link:'https://www.coursera.org/account/accomplishments/specialization/certificate/6KVGE7WVSY4U',
      src: 'assets/images/p7.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
