import { Tweet } from './components/Tweet.js'

const tweetArea = document.querySelector('.tweetsArea')

const listaTweet = [
    Tweet('olár'),
    Tweet('turo bom?')
]

ReactDOM.render(listaTweet, tweetArea)