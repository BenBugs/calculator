// STAGE 1

//when i see a calculator I may:
// 1. hit number
// 2. hit operator
// 3. clear
// 4. hit equals
// 5  hit decimal

// so if I hit number then store number
// if I hit operator,( +, -, *, /,) clear or equals then nothing happen?

//need mechanism to see what key the user is on

// what circumstances would you proceed to stage 2? 
// a. if a single number is present
// b. if a decimal is present

//STAGE 2
// 1. hit number
// 2. hit operator
// 3. hit clear
// 4. hit equals
// 5. hit decimal

// if i hit another number append to first number
// if i hit operator store operator in another variable
// if i hit clear then clear variable storing numbers 
// if I hit equals then nothing happens
// if i hit decimal then check if a decimal is string is already present in the first number. if yes do nothing if no add decimal to number string

// what circumstances would you proceed to stage 3? 
// a. if the first number is present and the operator is present

//STAGE 3
// 1. hit number
// 2. hit operator
// 3. hit clear
// 4. hit equals
// 5. hit decimal

// if i hit another number store this in another variable
// if i hit operator then change current operator
// if i hit clear then clear number variable and operator variable
// if i hit equals then nothing
// if i hit decimal then add decimal to second number string 

// what circumstances would you proceed to stage 4? 
// a. if i have a first number, an operator and a the second number is not empty (full condition)

//STAGE 4
// 1. hit number
// 2. hit operator
// 3. hit clear
// 4. hit equals
// 5. hit decimal

// if i hit another number it will append to second number
// if i hit operator calculate the value of first number + previous operator + second number and store this result as the first number 
        //and replace operator variable to current operator key press and clear second number
// if i hit clear then clear first number variable, operator variable and second number variable
// if i hit equals then calculate first number, operator and second number and store the answer in #displayAnswer
// if i hit decimal then check if a decimal is string is already present in the second number. if yes do nothing if no add decimal to number string

// what circumstances would you proceed to stage 5? 
// a. if i have a first number, an operator and a the second number is not empty (full condition)


