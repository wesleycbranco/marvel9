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
      publickey: ['682c86afd1be028aec17acd6da617822', [Validators.required, Validators.minLength(30)]],
      privatekey: ['d30f4b883ca72fe14cbbdbfab4ed073eb1b17127', [Validators.required, Validators.minLength(40)]]
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
