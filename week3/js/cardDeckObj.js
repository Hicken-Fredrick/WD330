const cardDeck = [
    {
        cardName: "Ace of Hearts",
        cardValue: 1,
        cardImg: "images/ah.gif",
        stillInDeck: true
    },
    {
        cardName: "Ace of Clubs",
        cardValue: 1,
        cardImg: "images/as.gif",
        stillInDeck: true
    },
    {
        cardName: "Ace of Diamonds",
        cardValue: 1,
        cardImg: "images/adi.gif",
        stillInDeck: true
    },
    {
        cardName: "Ace of Spades",
        cardValue: 1,
        cardImg: "images/asp.gif",
        stillInDeck: true
    },
    {
        cardName: "Two of Hearts",
        cardValue: 2,
        cardImg: "images/2h.gif",
        stillInDeck: true
    },
    {
        cardName: "Two of Clubs",
        cardValue: 2,
        cardImg: "images/2s.gif",
        stillInDeck: true
    },
    {
        cardName: "Two of Diamonds",
        cardValue: 2,
        cardImg: "images/2d.gif",
        stillInDeck: true
    },
    {
        cardName: "Two of Spades",
        cardValue: 2,
        cardImg: "images/2sp.gif",
        stillInDeck: true
    },
    {
        cardName: "Three of Hearts",
        cardValue: 3,
        cardImg: "images/3h.gif",
        stillInDeck: true
    },
    {
        cardName: "Three of Clubs",
        cardValue: 3,
        cardImg: "images/3s.gif",
        stillInDeck: true
    },
    {
        cardName: "Three of Diamonds",
        cardValue: 3,
        cardImg: "images/3d.gif",
        stillInDeck: true
    },
    {
        cardName: "Three of Spades",
        cardValue: 3,
        cardImg: "images/3sp.gif",
        stillInDeck: true
    },
    {
        cardName: "Four of Hearts",
        cardValue: 4,
        cardImg: "images/4h.gif",
        stillInDeck: true
    },
    {
        cardName: "Four of Clubs",
        cardValue: 4,
        cardImg: "images/4s.gif",
        stillInDeck: true
    },
    {
        cardName: "Four of Diamonds",
        cardValue: 4,
        cardImg: "images/4d.gif",
        stillInDeck: true
    },
    {
        cardName: "Four of Spades",
        cardValue: 4,
        cardImg: "images/4sp.gif",
        stillInDeck: true
    },
    {
        cardName: "Five of Hearts",
        cardValue: 5,
        cardImg: "images/5h.gif",
        stillInDeck: true
    },
    {
        cardName: "Five of Clubs",
        cardValue: 5,
        cardImg: "images/5s.gif",
        stillInDeck: true
    },
    {
        cardName: "Five of Diamonds",
        cardValue: 5,
        cardImg: "images/5d.gif",
        stillInDeck: true
    },
    {
        cardName: "Five of Spades",
        cardValue: 5,
        cardImg: "images/5sp.gif",
        stillInDeck: true
    },
    {
        cardName: "Six of Hearts",
        cardValue: 6,
        cardImg: "images/6h.gif",
        stillInDeck: true
    },
    {
        cardName: "Six of Clubs",
        cardValue: 6,
        cardImg: "images/6s.gif",
        stillInDeck: true
    },
    {
        cardName: "Six of Diamonds",
        cardValue: 6,
        cardImg: "images/6d.gif",
        stillInDeck: true
    },
    {
        cardName: "Six of Spades",
        cardValue: 6,
        cardImg: "images/6sp.gif",
        stillInDeck: true
    },
    {
        cardName: "Seven of Hearts",
        cardValue: 7,
        cardImg: "images/7h.gif",
        stillInDeck: true
    },
    {
        cardName: "Seven of Clubs",
        cardValue: 7,
        cardImg: "images/7s.gif",
        stillInDeck: true
    },
    {
        cardName: "Seven of Diamonds",
        cardValue: 7,
        cardImg: "images/7d.gif",
        stillInDeck: true
    },
    {
        cardName: "Seven of Spades",
        cardValue: 7,
        cardImg: "images/7sp.gif",
        stillInDeck: true
    },
    {
        cardName: "Eight of Hearts",
        cardValue: 8,
        cardImg: "images/8h.gif",
        stillInDeck: true
    },
    {
        cardName: "Eight of Clubs",
        cardValue: 8,
        cardImg: "images/8s.gif",
        stillInDeck: true
    },
    {
        cardName: "Eight of Diamonds",
        cardValue: 8,
        cardImg: "images/8d.gif",
        stillInDeck: true
    },
    {
        cardName: "Eight of Spades",
        cardValue: 8,
        cardImg: "images/8sp.gif",
        stillInDeck: true
    },
    {
        cardName: "Nine of Hearts",
        cardValue: 9,
        cardImg: "images/9h.gif",
        stillInDeck: true
    },
    {
        cardName: "Nine of Clubs",
        cardValue: 9,
        cardImg: "images/9s.gif",
        stillInDeck: true
    },
    {
        cardName: "Nine of Diamonds",
        cardValue: 9,
        cardImg: "images/9d.gif",
        stillInDeck: true
    },
    {
        cardName: "Nine of Spades",
        cardValue: 9,
        cardImg: "images/9sp.gif",
        stillInDeck: true
    },
    {
        cardName: "Ten of Hearts",
        cardValue: 10,
        cardImg: "images/10h.gif",
        stillInDeck: true
    },
    {
        cardName: "Ten of Clubs",
        cardValue: 10,
        cardImg: "images/10s.gif",
        stillInDeck: true
    },
    {
        cardName: "Ten of Diamonds",
        cardValue: 10,
        cardImg: "images/10d.gif",
        stillInDeck: true
    },
    {
        cardName: "Ten of Spades",
        cardValue: 10,
        cardImg: "images/10sp.gif",
        stillInDeck: true
    },
    {
        cardName: "Jack of Hearts",
        cardValue: 10,
        cardImg: "images/jh.gif",
        stillInDeck: true
    },
    {
        cardName: "Jack of Clubs",
        cardValue: 10,
        cardImg: "images/js.gif",
        stillInDeck: true
    },
    {
        cardName: "Jack of Diamonds",
        cardValue: 10,
        cardImg: "images/jd.gif",
        stillInDeck: true
    },
    {
        cardName: "Jack of Spades",
        cardValue: 10,
        cardImg: "images/jsp.gif",
        stillInDeck: true
    },
    {
        cardName: "Queen of Hearts",
        cardValue: 10,
        cardImg: "images/qh.gif",
        stillInDeck: true
    },
    {
        cardName: "Queen of Clubs",
        cardValue: 10,
        cardImg: "images/qs.gif",
        stillInDeck: true
    },
    {
        cardName: "Queen of Diamonds",
        cardValue: 10,
        cardImg: "images/qd.gif",
        stillInDeck: true
    },
    {
        cardName: "Queen of Spades",
        cardValue: 10,
        cardImg: "images/qsp.gif",
        stillInDeck: true
    },
    {
        cardName: "King of Hearts",
        cardValue: 10,
        cardImg: "images/kh.gif",
        stillInDeck: true
    },
    {
        cardName: "King of Clubs",
        cardValue: 10,
        cardImg: "images/ks.gif",
        stillInDeck: true
    },
    {
        cardName: "King of Diamonds",
        cardValue: 10,
        cardImg: "images/kd.gif",
        stillInDeck: true
    },
    {
        cardName: "King of Spades",
        cardValue: 10,
        cardImg: "images/ksp.gif",
        stillInDeck: true
    },
]