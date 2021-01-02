import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {

allProjects: any[] = [
  {
    type: 'web',
    title:'Trello board using Angular5',
    technologies:'Angular5, Bootstrap3',
    src: 'assets/images/p10.PNG'
  },
  {
    type: 'web',
    title:'Online shopping website',
    technologies:'Angular6, Bootstrap4',
    src: 'assets/images/p9.PNG'
  },
  /*
  {
    type: 'web',
    title:'Online shopping website',
    technologies:'Angular6, Bootstrap4',
    src: 'assets/images/p9.jpg'
  },

  {
    type: 'web',
    title:'Online shopping website',
    technologies:'Angular6, Bootstrap4',
    src: 'assets/images/p14.PNG'
  },
  */
  {
    type: 'web',
    title:'Tunisie Telecom services (Intership)',
    technologies:'Angular9, NodeJS, ExpressJS, MongoDB',
    src: 'assets/images/p16.PNG'
  },
  {
    type: 'app',
    title:'Sensor application (Final year)',
    technologies:'Ionic4, Bootstrap4,Firebase',
    src: 'assets/images/p19.png'
  },
  {
    type: 'app',
    title:'AI project: Taquin game using A* algorithm',
    technologies:'Python',
    src: 'assets/images/p22.png'
  },
 
  
];


  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }




}
