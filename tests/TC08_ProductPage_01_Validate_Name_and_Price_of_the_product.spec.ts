import {test, expect} from '@playwright/test'
import {LandingPage} from '../Pages/LandingPage'
import { LoginPage } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';
import { CategoryPage } from '../Pages/CategoryPage';
import { ProductPage } from '../Pages/ProductPage';

let AUT="https://www.advantageonlineshopping.com/#/";
let USERID="chandan.kumar";
let PASSWORD="Chk@1111";
let Category='SPEAKERS';
let productName="BOSE SOUNDLINK WIRELESS SPEAKER";
let productPrice='$129.00';
let landingPage:LandingPage;
let loginPage:LoginPage
let homePage:HomePage;
let categoryPage:CategoryPage;
let productPage:ProductPage;

test.beforeEach(async({page})=>{
    await page.goto(AUT);
    landingPage=new LandingPage(page);
    loginPage=await  landingPage.GoTo_LoginPage()
    homePage=await loginPage.Login_With(USERID,PASSWORD);
    categoryPage=await homePage.Select_Category(Category);
    productPage= await categoryPage.SelectProduct(productName);
            
})

test.describe("TC08_Validate_Name_and_Price_of_the_product", async()=>{
     test("Validate_Name_and_Price_of_the_product" , async()=>{

           await test.step("Validate Product Name", async()=>{
            expect(await productPage.get_ProductPageHeader()).toHaveText(productName);
           })

           await test.step("Validate Product Price", async()=>{
           expect(await productPage.getPrice()).toBe(productPrice);
           })

          

          

})
})