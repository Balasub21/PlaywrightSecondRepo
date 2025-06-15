const{test,expect}=require("@playwright/test")
const { log } = require("console")

test("It is executes beforeAll Test Script",async ({}) =>{
    console.log("It is executes beforeAll Test Script")
})

test("It is executes beforeEach of All available Test Script",async ({}) =>{
    console.log("It is executes beforeEach of All available Test Script")
})
test("It is First Test Script",async ({}) =>{
    expect("GenTech Academy".endsWith("Academy")).toBeTruthy()
})
test("It is Second Test Script",async ({}) =>{
    expect("GenTech Academy".startsWith("GenTech")).toBeTruthy()
})


test("It is executes afterEach of All available Test Script",async ({}) =>{
    console.log("It is executes afterEach of All available Test Script")
})
test("It is executes afterAll Test Script",async ({}) =>{
    console.log("It is executes afterAll Test Script")
})

