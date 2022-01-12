import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private tokenService: TokenService,
    public route: Router
  ) {
    this.form = this.formBuilder.group({
      publickey: ['5a237863b3cc2061003cbbc4fe20dc06', [Validators.required, Validators.minLength(30)]],
      privatekey: ['fbf255068eccea6d0ef951b9f25626b57ab2fe72', [Validators.required, Validators.minLength(40)]]
    })
  }

  ngOnInit(): void {
    
  }

  logIn(): void {
    if(this.form.valid) {
      this.tokenService.setToken(this.form.value);
      this.route.navigate(['main'])
    }
  }

}
