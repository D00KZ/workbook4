"use strict";

let myInfo = {
  userProfileID: "0293201",
  userFirstName: "Christopher",
  userLastName: "Dookie",
  userAge: "20",
  userStateLocation: "Brooklyn New York",
};

function printContact(myInfo) {
  console.log("Name: " + myInfo.userFirstName, myInfo.userLastName);
  console.log("User Age: " + myInfo.userAge);
  console.log("Location: " + myInfo.userStateLocation);
}

printContact(myInfo);
