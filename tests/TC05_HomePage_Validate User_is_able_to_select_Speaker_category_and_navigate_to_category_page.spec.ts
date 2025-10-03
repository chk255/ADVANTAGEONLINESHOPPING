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
            
})

test.describe("HomePage Select Category Validation", async()=>{
     test("Validate Select Category Functionality" , async()=>{

           await test.step("Select Category", async()=>{
               categoryPage=await homePage.Select_Category(Category);
               
           })
           await test.step("Validate User Navigate to Category page", async()=>{
           await expect(await categoryPage.get_CategoryTitle()).toHaveText(Category);
           })

})
})