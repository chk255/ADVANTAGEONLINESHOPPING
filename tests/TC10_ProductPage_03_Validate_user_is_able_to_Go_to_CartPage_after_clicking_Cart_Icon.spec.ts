import {test, expect} from '@playwright/test'
import {LandingPage} from '../Pages/LandingPage'
import { LoginPage } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';
import { CategoryPage } from '../Pages/CategoryPage';
import { ProductPage } from '../Pages/ProductPage';
import { CartPage } from '../Pages/CartPage';


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
let cartPage:CartPage;


test.beforeEach(async({page})=>{
    await page.goto(AUT);
    landingPage=new LandingPage(page);
    loginPage=await  landingPage.GoTo_LoginPage()
    homePage=await loginPage.Login_With(USERID,PASSWORD);
    categoryPage=await homePage.Select_Category(Category);
     productPage= await categoryPage.SelectProduct(productName);
   
            
})
test.describe("Cart Page Navigation from Product Page", async()=>{
     test("Validate_user_is_able_to_Go to Cart Page" , async()=>{


           await test.step("Validate Cart Button", async()=>{
           expect(await productPage.get_AddToCart_Button()).toBeVisible();
           })
           await test.step("Validate Add to Cart Button Functionality", async()=>{
            
           await productPage.AddToCart();
           })
            await test.step("Validate Go to Cart Navigation", async()=>{
             cartPage=await productPage.Goto_CARTPAGE();
             expect(await  cartPage.get_CartPageHeader()).toContainText("SHOPPING CART");
           })

          

})
})