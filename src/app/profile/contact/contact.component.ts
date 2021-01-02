import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'dialog-service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
  export class ContactComponent implements OnInit {
 
    model: any = {};
  
    form:FormGroup;
    constructor(
      private http: HttpClient,
      private dialogService: DialogService
    ){}
  
    ngOnInit() {
      
       }
       onSubmit(name, subject, email, message) {
          const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
          this.http.post('https://formspree.io/f/mbjpzoqg',
            { name: name, subject: subject, replyto: email, message: message },
            { 'headers': headers }).subscribe(
              response => {
                this.dialogService.withAlert('Sent !');
              }
            );
        }  
}
