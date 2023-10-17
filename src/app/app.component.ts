import { Component } from '@angular/core';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FormGroup, FormControl } from '@angular/forms';
// import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'healthluk';
  form = new FormGroup({
   message: new FormControl('')
   });

   onSubmit() {
    console.log(this.form.value);
  }

//   name = new });FormControl('');

  faFacebook = faFacebook
  faInstagram = faInstagram
  faXTwitter = faXTwitter
}
