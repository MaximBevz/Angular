import {Component, Input, OnInit} from '@angular/core';
import User from "../../models/user";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;
  constructor(private activatedRout: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  goToDetails():void {
    this.router.navigate([this.user.id], {relativeTo: this.activatedRout, state: this.user});
  }
}
