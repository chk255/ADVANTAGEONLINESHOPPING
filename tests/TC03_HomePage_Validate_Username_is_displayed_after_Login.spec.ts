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
    loginPage=await  landingPage.GoTo_LoginPage()
    homePage=await loginPage.Login_With(USERID,PASSWORD);
            
})

test.describe("HomePage Validation", async()=>{
     test("Validate username after Login" , async()=>{

           await test.step("Validate username at Home Page", async()=>{
                expect(await homePage.get_USERNAME()).toBeTruthy();
                expect(await homePage.get_USERNAME()).toHaveText(USERID);
           })

})
})