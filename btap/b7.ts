class Account{
    protected acccountNumber:string;
    protected balence: number;
    constructor(acccountNumber:string,balence:number){
        this.acccountNumber=acccountNumber;
        this.balence=balence;
    }
    deposit(mount:number):void{
        this.balence+=mount;
    }
    withdraw(mount:number):void{
        if(this.balence>=mount){
            this.balence-=mount;
            console.log("rút thành công");
        }else{
            console.log("không đủ tiền");
        }
        
    }

}
class SavingAccount extends Account{
    private interestRate :number;
    constructor(acccountNumber:string,balence:number,interestRate:number){
        super(acccountNumber,balence);
        this.interestRate=interestRate;
    }
    calculateInterest(){
        let interest=(this.balence * this.interestRate)/100;
        console.log(interest);
        return  interest;
    }
}
let saving = new SavingAccount("09090909",1000,5)
let month =  saving.calculateInterest();
saving.deposit(1000);
let months = saving.calculateInterest();
saving.withdraw(500);