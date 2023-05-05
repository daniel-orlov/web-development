import Debug "mo:base/Debug";

actor DBank {
  var currentValue = 300;

  currentValue := 100;

  let id = 3456781786567327168;
  
  Debug.print "DBank: currentValue:";
  Debug.print(debug_show(currentValue));
};
