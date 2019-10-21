import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.scss']
})
export class CurrentUserComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<CurrentUserComponent>
  ) { }

  ngOnInit() {
  }

  setUser(username: string) {
    this.dialogRef.close(username);
  }
}
