export class Quote {
    text: string
    author: string
    vote: number

    constructor() {
        this.vote = 0
    }
    upvote = () => {
        this.vote += 1;
    }
    downvote = () => {
        this.vote -= 1;
    }
    voteToString = () => this.vote > 0 ? "+" + this.vote : this.vote;
}
