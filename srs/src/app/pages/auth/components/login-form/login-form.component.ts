import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() sendLoginForm = new EventEmitter<void>();
  public form: FormGroup;
  public login = 'system.administrator';
  public password = 'admin';

  public ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(this.login, [Validators.required]),
      password: new FormControl(this.password, [Validators.required])
    });
  }

  public signIn(): void {
    if (this.form.valid) {
      this.sendLoginForm.emit();
    }
  }
}
