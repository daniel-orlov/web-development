import Float "mo:base/Float";
import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Time "mo:base/Time";

actor DBank {
  stable var currentBalance: Float = 0.0;
  stable var startTime = Time.now();
  
  let id = 3456781786567327168;

  Debug.print "DBank: created";

  Debug.print "DBank: start time:";
  Debug.print(debug_show(startTime));

  Debug.print "DBank: current balance:";
  Debug.print(debug_show(currentBalance));

  // topUp: Nat -> ()
  // EFFECT: updates the current balance
  public func topUp(amount: Float) {
    currentBalance += amount;

    Debug.print "DBank: updated balance";
    Debug.print(debug_show(currentBalance));
  };

  // withdraw: Nat -> ()
  // EFFECT: updates the current balance
  public func withdraw(amount: Float) {
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
  public query func getBalance(): async Float {
      return currentBalance;
  };

  // getId: () -> Nat
  // EFFECT: returns the id of the bank
  public query func getId(): async Nat {
      return id;
  };

  // compound: () -> ()
  // EFFECT: updates the current balance using the compound interest formula
  public func compound() {
    let currentTime = Time.now();
    let timeElapsedNs = currentTime - startTime;
    let timeElapsedSec = timeElapsedNs / 1000000000;

    Debug.print "DBank: time elapsed:";
    Debug.print(debug_show(timeElapsedSec));

    currentBalance := currentBalance * (1.01 ** Float.fromInt(timeElapsedSec));

    Debug.print "DBank: new balance:";
    Debug.print(debug_show(currentBalance));

    startTime := currentTime;
  };
};
