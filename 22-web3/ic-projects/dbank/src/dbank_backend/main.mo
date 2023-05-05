import Debug "mo:base/Debug";
import Nat "mo:base/Nat";

actor DBank {
  var currentBalance = 300;

  currentBalance := 100;

  let id = 3456781786567327168;

  Debug.print "DBank: current balance:";
  Debug.print(debug_show(currentBalance));

  // Deposit
  public func topUp(amount: Nat) {
    currentBalance += amount;

    Debug.print "DBank: updated balance";
    Debug.print(debug_show(currentBalance));
  };
};
