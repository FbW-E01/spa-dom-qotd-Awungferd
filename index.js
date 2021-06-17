const quotes = ["Shall I compare thee to a summer’s day? Thou art more lovely and more temperate",
"Rough winds do shake the darling buds of May, And summer’s lease hath all too short a date",
"Sometime too hot the eye of heaven shines, And often is his gold complexion dimm'd",
"And every fair from fair sometime declines, By chance or nature’s changing course untrimm'd",
"But thy eternal summer shall not fade, Nor lose possession of that fair thou ow’st",
"Nor shall death brag thou wander’st in his shade, When in eternal lines to time thou grow’st",
"So long as men can breathe or eyes can see, So long lives this, and this gives life to thee.",
'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    "Don't watch the clock; do what it does. Keep going.",
    'The secret of getting ahead is getting started.',
    'Well done is better than well said.',
    'You miss 100% of the shots you don’t take.',
    'A goal is a dream with a deadline.',
    'Outstanding people have one thing in common: An absolute sense of mission.',
    'Trying is winning in the moment.',
    'Fall down seven times and stand up eight.',
    "You just can't beat the person who never gives up.",
    'There is little success where there is little laughter.',
    'We cannot solve our problems with the same thinking we used when we created them.'
]

const butt = document.querySelector("button") // button controls
const quoteRandom = document.querySelector("#quote-area") //Placeholder for quote

function mouseClickManager(){
    const randomQuote = quotes[Math.floor((Math.random()*quotes.length))]
    console.log(randomQuote)
       //butt.classList.add("hover")
       quoteRandom.textContent= randomQuote
}
//Create click event handler to control button clicks
butt.addEventListener("click", mouseClickManager)
