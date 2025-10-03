import {test, expect} from '@playwright/test'
import {LandingPage} from '../Pages/LandingPage'
import { LoginPage } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';

let AUT="https://www.advantageonlineshopping.com/#/";
let USERID="chandan.kumar";
let PASSWORD="Chk@1111";
let landingPage:LandingPage;
let loginPage:LoginPage
let homePage:HomePage;

test.beforeEach(async({page})=>{
    await page.goto(AUT);
    landingPage=new LandingPage(page);
})

test.describe("Valid Login Page Test", () => {
     test("Validate Login with valid credentials" , async()=>{

           await test.step("Navigating to Login Page", async()=>{
                loginPage=await  landingPage.GoTo_LoginPage();
            })
           await test.step("Login into application", async()=>{
                homePage=await loginPage.Login_With(USERID,PASSWORD);
            })
           await test.step("Validate user navigate to Home Page", async()=>{
                expect(await homePage.get_USERNAME()).toBeTruthy();
                expect(await homePage.get_USERNAME()).toHaveText(USERID);
           })

     })
})