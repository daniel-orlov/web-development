import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Time "mo:base/Time";

actor DBank {
  stable var currentBalance = 0;

  let startTime = Time.now();
  let id = 3456781786567327168;

  Debug.print "DBank: created";

  Debug.print "DBank: start time:";
  Debug.print(debug_show(startTime));

  Debug.print "DBank: current balance:";
  Debug.print(debug_show(currentBalance));

  // topUp: Nat -> ()
  // EFFECT: updates the current balance
  public func topUp(amount: Nat) {
    currentBalance += amount;

    Debug.print "DBank: updated balance";
    Debug.print(debug_show(currentBalance));
  };

  // withdraw: Nat -> ()
  // EFFECT: updates the current balance
  public func withdraw(amount: Nat) {
    // check if the amount is less than the current balance
    if (amount > currentBalance) {
      Debug.print "DBank: insufficient funds";
      Debug.print "DBank: trying to withdraw: ";
      Debug.print(debug_show(amount));
      Debug.print "DBank: current balance:";  
      Debug.print(debug_show(currentBalance));
      return;
    };
  
    currentBalance -= amount;

    Debug.print "DBank: updated balance";
    Debug.print(debug_show(currentBalance));
  };

  // getBalance: () -> Nat
  // EFFECT: returns the current balance
  public query func getBalance(): async Nat {
      return currentBalance;
  };

  // getId: () -> Nat
  // EFFECT: returns the id of the bank
  public query func getId(): async Nat {
      return id;
  };
};
