import {test, expect} from '@playwright/test'
import {LandingPage} from '../Pages/LandingPage'
import { LoginPage } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';
import { CategoryPage } from '../Pages/CategoryPage';

let AUT="https://www.advantageonlineshopping.com/#/";
let USERID="chandan.kumar";
let PASSWORD="Chk@1111";
let Category='SPEAKERS';
let productName="BOSE SOUNDLINK WIRELESS SPEAKER";
let landingPage:LandingPage;
let loginPage:LoginPage
let homePage:HomePage;
let categoryPage:CategoryPage;

test.beforeEach(async({page})=>{
    await page.goto(AUT);
    landingPage=new LandingPage(page);
    loginPage=await  landingPage.GoTo_LoginPage()
    homePage=await loginPage.Login_With(USERID,PASSWORD);
    categoryPage=await homePage.Select_Category(Category);
            
})

test.describe("HomePage Select Category Validation", async()=>{
     test("Validate Select Category Functionality" , async()=>{

           await test.step("Validate Category Page Title", async()=>{
           await expect(await categoryPage.get_CategoryTitle()).toHaveText(Category);
           })

})
})