/**
 * A zone represents an area at a centre.Each zone has a name and a
 * capacity which represents the maximum number of people who can enter
 * the zone at any one time. Each zone must maintain a list of all cards
 * (and hence members) currently in the zone. These lists are updated
 * whenever members enter or leave a zone,and it is always possible to
 * say how many people(cards) are in the zone and who they are.
 */

class Zone {

    private cards: CardBuilder[] = [];

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


}
