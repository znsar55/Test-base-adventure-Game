const inquirer = require("inquirer");
//jest.mock("inquirer");
let sum = require('./main')

test("Drink function is working",()=>{
    expect(sum.dang).toBeDefined()
})


test("Food function" ,()=>{
    expect(sum.food).toBeTruthy()
})

