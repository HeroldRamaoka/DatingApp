import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
  }

}
