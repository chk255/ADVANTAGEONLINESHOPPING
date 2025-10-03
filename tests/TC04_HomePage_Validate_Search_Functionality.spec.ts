import {test, expect} from '@playwright/test'
import {LandingPage} from '../Pages/LandingPage'
import { LoginPage } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';

let AUT="https://www.advantageonlineshopping.com/#/";
let USERID="chandan.kumar";
let PASSWORD="Chk@1111";
let Category='SPEAKERS';
let landingPage:LandingPage;
let loginPage:LoginPage
let homePage:HomePage;

test.beforeEach(async({page})=>{
    await page.goto(AUT);
    landingPage=new LandingPage(page);
    loginPage=await  landingPage.GoTo_LoginPage()
    homePage=await loginPage.Login_With(USERID,PASSWORD);
            
})

test.describe("HomePage Search Page Validation", async()=>{
     test("Validate Search Functionality" , async()=>{

           await test.step("Enter product Name in Search bar", async()=>{
               await homePage.Search_Product(Category);
               
           })
           await test.step("Validate Search Result Header", async()=>{
              expect(await homePage.get_Search_Category()).toContain(Category);
           })

})
})