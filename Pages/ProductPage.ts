import {Locator, Page} from "playwright"
import { PageUtils } from "../Utils/PageUtils";
import { CartPage } from "../Pages/CartPage";


export class ProductPage extends PageUtils{

    page; 
    private cartPage:CartPage;
    
    
    

    constructor(page:Page){
        super(page)
        this.page=page;
       // this.CATEGORYTITLE=page.locator("//h3[contains(@class,'categoryTitle')]");
       this.cartPage=new CartPage(page)
       
       
    }
  async get_ProductPageHeader(){

    const ProductPageHeader=this.page.locator("#Description h1");
    await ProductPageHeader.waitFor({state:'visible',timeout:10000});
   
      return  ProductPageHeader;
   
  }
  async getPrice(){

    const pricelocator=this.page.locator("//div[@id='Description']/h2");
          await pricelocator.waitFor({state:'visible'});
         return (await pricelocator.innerText()).trim();
  }
  async get_AddToCart_Button(){
    // Try multiple possible button labels/attributes because the app uses different names/attributes in different builds
    const candidates = [
      {desc: "role: ADD TO CART (case-insensitive)", loc: this.page.getByRole('button', { name: /add to cart/i })},
      {desc: "role: save_to_cart (underscore)", loc: this.page.getByRole('button', { name: /save[_\s]?to[_\s]?cart/i })},
      {desc: "text: ADD TO CART", loc: this.page.getByText(/add to cart/i)},
      {desc: "aria-label contains 'cart'", loc: this.page.locator("button[aria-label*='cart']")},
      {desc: "aria-label contains 'save'", loc: this.page.locator("button[aria-label*='save']")},
      {desc: "id contains 'cart'", loc: this.page.locator("button[id*='cart']")},
      {desc: "class contains 'cart'", loc: this.page.locator("button[class*='cart']")},
      {desc: "#save_to_cart", loc: this.page.locator('#save_to_cart')}
    ];

    const tried: string[] = [];
    for (const c of candidates) {
      tried.push(c.desc);
      try {
        const first = c.loc.first();
        // short wait to see if this candidate appears
        await first.waitFor({ state: 'visible', timeout: 3000 });
        return first;
      } catch (e) {
        // ignore and try next
      }
    }

    // If none matched/visible, return a generic locator (so caller can still run assertions) but include helpful context in the error
    throw new Error(`Add to Cart button not found. Tried selectors: ${tried.join(', ')}`);
   
  }
  async AddToCart(){

    const addToCartButton = await this.get_AddToCart_Button();
    if(await addToCartButton.isVisible()){
      await this.Click(addToCartButton);
    }

  }
  async Goto_CARTPAGE(){
        await this.Goto_CART();
        return this.cartPage;

    }
    
    


   

}
