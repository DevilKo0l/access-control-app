class MemberCard extends Card {
  private static currentId = 1000;
  private cardId: number; 

  // /**
  //  * Constructor for a Member's card
  //  * @param {string} membershipNumber
  //  * @param {string} memberName - member's name
  //  * @param {number} rating - member's rating
  //  * @param {number} credits - inital number of credits
  //  * @param {string} centre - centre at which a member is registered
  //  */
  constructor(    
    memberName: string,
    rating: number,
    credits: number,
    private centre: string
  ) {
    super(memberName, rating, credits)
    this.cardId = MemberCard.currentId++;
    this.centre = centre;
  }
  creditNumber(): number {
    throw new Error("Method not implemented.");
  }

 
  public getName = (): string => this.memberName;

  
  public getId = (): number => this.cardId;

 
  public changeRating = (rating: number): void => {
    this.rating = rating;
  };


  public getRating = (): number => this.rating;


  public addCredits = (credits: number): void => {
    this.credits += credits;
  };
 
  public useZone = (): void => {
    this.credits -= 4;
  };

 
  public getCredits = (): number => this.credits;

  
  public hasEnoughCredits = (): boolean => this.credits >= 4;

 
  public toString = (): string =>
    "***Member Card***" +
    "\nCard No: " +
    this.cardId +
    "\nName: " +
    this.memberName +
    "\nRating: " +
    this.rating +
    "\nCredits: " +
    this.credits +
    "\nRelax Centre : " +
    this.centre +
    "\n";
}
