import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { EmitterService } from './../emitter.service';
import { GithubQueryService } from './../github-query.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent {
  @Input() queryId: string
  userScore: number

  constructor(private githubQueryService: GithubQueryService) {
    EmitterService.get(this.queryId).subscribe((user) => { this.getUserScore(user)})
  }

  getUserScore(user) {
    this.userScore = user.public_repos + user.followers
  }
}
