import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private tokenService: TokenService
  ) {
    this.form = this.formBuilder.group({
      publickey: ['', Validators.required],
      privatekey: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    
  }

  logIn(): void {
    if(this.form.valid) {

    }
  }

}
