/*Tester class creates all the zones, doors and cards of the PoznanRelax centre 
and adds them to a variable with the type of RelaxCentre – which is in fact an object
of the RelaxSite class and represents the whole Relax leisure centre*/

import { Card } from "react-native-elements/dist/card/Card";

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


    private testMemberCard: MemberCard[] = [
        new MemberCard("Joe", 5, 10, "Poznan"),
        new MemberCard("Dan", 12, 1, "Poznan"),
        new MemberCard("Tim", 20, 5, "Poznan"),
        new MemberCard("Matt", 3, 5, "Poznan")
    ]

    private testLoyaltyCard: LoyaltyCard[] = [
        new LoyaltyCard("Joe", 5, 10),
        new LoyaltyCard("Dan", 12, 1),
        new LoyaltyCard("Tim", 20, 5)        
    ]

    private testStaffCard: StaffCard[] = [
        new StaffCard("Pete", null, null),
        new StaffCard("Chen",  null, null)
    ]

    createTestCentre(): void{

        for(let newMemberCard of this.testMemberCard) {
            this.testRelaxCentre.addCard(newMemberCard);
        }
        for(let newLoyaltyCard of this.testLoyaltyCard) {
            this.testRelaxCentre.addCard(newLoyaltyCard);
        }
        for(let newStaffCard of this.testStaffCard) {
            this.testRelaxCentre.addCard(newStaffCard);
        }
        
        this.testRelaxCentre.cardsInAllZones();
        
    }
}
