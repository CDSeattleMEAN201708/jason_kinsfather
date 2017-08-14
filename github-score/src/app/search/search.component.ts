import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { EmitterService } from './../emitter.service'
import { GithubQueryService } from './../github-query.service'
import { Gituser } from './../gituser'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() queryId: string
  username: string

  constructor(private githubQueryService: GithubQueryService) {
    this.username = ''
  }

  formSubmitted() {
    this.githubQueryService
      .retrieveUsers(this.username)
      .subscribe(
        users => {
          EmitterService.get(this.queryId).emit(users)
          this.username = ''
        },
        err => {
          console.log(err)
        }
      )
  }
}
