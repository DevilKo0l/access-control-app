/**
 * A zone represents an area at a centre.Each zone has a name and a
 * capacity which represents the maximum number of people who can enter
 * the zone at any one time. Each zone must maintain a list of all cards
 * (and hence members) currently in the zone. These lists are updated
 * whenever members enter or leave a zone,and it is always possible to
 * say how many people(cards) are in the zone and who they are.
 */

class Zone {

    private cards: Card[] = [];

    constructor(
        private name: string,
        private capacity: number,
        private rating: number
    )
    {
        this.name = name;
        this.capacity = capacity;
        this.rating = rating;
    }

    public getName = (): string => this.name;
    public getCapacity = (): number => this.capacity;
    public getRating = (): number => this.rating;
    public getNumberOfPeople = (): number => this.cards.length;
    
    public addCard = (card: Card): boolean => {
        if(!this.isCardAllowToEnter(card))
            return false;
        this.cards.push(card);
        return true;
    }

    public removeCard = (card: Card): boolean => {
        if(this.isCardInTheZone(card) == false)
        {
            return false;
        }

        const index = this.cards.indexOf(card);
        this.cards.splice(index,1);
        return true
    }
    public showCards = (): string =>{
        let cards = ""
        for(let card of this.cards)
        {
            cards+=card.toString()+"\n"+"\n"
        }
        return cards;
    }
    
    public isCardInTheZone = (card: Card): boolean => this.cards.includes(card);

    public isCardAllowToEnter = (card: Card): boolean => 
    (this.cards.length+1<this.capacity)&& 
    (this.getRating() < card.getRating())&&
    this.cards.includes(card);
}
