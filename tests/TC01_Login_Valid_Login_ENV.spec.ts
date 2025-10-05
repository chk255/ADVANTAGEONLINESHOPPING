import {test, expect} from '@playwright/test'
import {LandingPage} from '../Pages/LandingPage'
import { LoginPage } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';
import { ENV } from '../Utils/Env'

//let AUT="https://www.advantageonlineshopping.com/#/";
//let USERID="chandan.kumar";
//let PASSWORD="Chk@1111";
let USERID1="chandan.kumar";
let landingPage:LandingPage;
let loginPage:LoginPage
let homePage:HomePage;

test.beforeEach(async({page})=>{
    await page.goto(ENV.baseURL);  
    landingPage=new LandingPage(page);
})

test.describe("Valid Login Page Test", () => {
     test("Validate Login with valid credentials" , async()=>{

           await test.step("Navigating to Login Page", async()=>{
                loginPage=await  landingPage.GoTo_LoginPage();
            })
           await test.step("Login into application", async()=>{
                homePage=await loginPage.Login_With(ENV.useremail,ENV.userpassword);
            })
           await test.step("Validate user navigate to Home Page", async()=>{
                expect(await homePage.get_USERNAME()).toBeTruthy();
                expect(await homePage.get_USERNAME()).toHaveText(USERID1);
           })

     })
})