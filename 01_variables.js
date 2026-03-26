const accountId = 123465  //we cant change the value of accountId because it is declared with const
let accountEmail = "dhruv99@gmaiil.com"  // we can change the value of accountEmail because it is declared with let
var accountPassword = "23456"  // we can change the value of accountPassword because it is declared with var
let accountState;  // we can change the value of accountState because it is declared with let
let accountCity = "Delhi"  // we can change the value of accountCity because it is declared with let


/*
we did not use var beacause of issue with var is that it is function scoped and it can be re-declared and updated, which can lead to bugs in the code.
*/
accountEmail = "newemail@example.com"
accountPassword = "newpassword123"
accountCity = "Mumbai"
console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountState, accountCity])