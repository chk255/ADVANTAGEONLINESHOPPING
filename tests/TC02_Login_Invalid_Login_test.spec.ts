import {test, expect} from '@playwright/test'
import {LandingPage} from '../Pages/LandingPage'
import { LoginPage } from '../Pages/LoginPage';

let AUT="https://www.advantageonlineshopping.com/#/";
let USERID="chandan.kumar";
let INVALIDPASSWORD="Chk@11111";
let ERRORMESSAGE="Incorrect user name or password.";
let landingPage:LandingPage;
let loginPage:LoginPage

test.beforeEach(async({page})=>{

    await page.goto(AUT);
    landingPage=new LandingPage(page);


})

test.describe("Invalid Login Page Test", async()=>{
test("Validate Login with invalid credentials" , async()=>{

   await  test.step("Navigating to Login Page", async()=>{
      loginPage=await  landingPage.GoTo_LoginPage();
    })
   await  test.step("Login into application", async()=>{
   await loginPage.Login_With(USERID,INVALIDPASSWORD);
    })
    await test.step("Validating Error Message", async()=>{
    expect(await loginPage.get_ERROR()).toBe(ERRORMESSAGE);
    })

})
})