class Tester {

    testRelaxCentre: RelaxCentre;

    private testZone:Zone[] = [
        new Zone("Outside", 1000, 0),
        new Zone("Reception", 100, 1),
        new Zone("Pool", 10, 3),
        new Zone("Sauna", 2, 5),
        new Zone("Sun Bed", 1, 1)]

    private testDoors: Door[] = [
        new Door(this.testZone[0], this.testZone[1], 0),
        new Door(this.testZone[1], this.testZone[0], 1),
        new Door(this.testZone[1], this.testZone[2], 2),
        new Door(this.testZone[2], this.testZone[1], 3),
        new Door(this.testZone[3], this.testZone[1], 4),
        new Door(this.testZone[1], this.testZone[4], 5),
        new Door(this.testZone[4], this.testZone[1], 6),
        new Door(this.testZone[2], this.testZone[3], 7)]
   
    private card: Card[]=[
        new MemberCard("Joe", 5, 10, "Poznan"),
        new MemberCard("Dan", 12, 1, "Poznan"),
        new MemberCard("Tim", 20, 5, "Poznan"),
        new MemberCard("Matt", 3, 5, "Poznan"),
        new MemberCard("Ayimkan", 21, 17, "Poznan"),
        new LoyaltyCard("Joe", 5, 10),
        new LoyaltyCard("Dan", 12, 1),
        new LoyaltyCard("Tugay", 18, 8),
        new StaffCard("Pete",123, "pool"),
        new StaffCard("Chen",124,"fitness"),
        new StaffCard("Nguyen", 125,"Reception")

    ]

    createTestCentre(): void{

        for(let card of this.card) {
            this.testRelaxCentre.addCard(card);
        }               
        this.testRelaxCentre.cardsInAllZones();
        this.testRelaxCentre.getCentreName();    
    }
}