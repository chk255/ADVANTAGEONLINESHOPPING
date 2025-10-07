import {Locator, Page} from "playwright"
import { PageUtils } from "../Utils/PageUtils";
import { ProductPage } from "./ProductPage";


export class CategoryPage extends PageUtils{

    page; 
   // private CATEGORYTITLE;
   private productPage:ProductPage;
   
    
    
    

    constructor(page:Page){
        super(page)
        this.page=page;
       // this.CATEGORYTITLE=page.locator("//h3[contains(@class,'categoryTitle')]");
       this.productPage=new ProductPage(page)
       
       
    }
  async get_CategoryTitle(){
    return this.page.locator("//h3[contains(@class,'categoryTitle')]");;
  }
  async SelectProduct(product:string){
   // Use a case-insensitive regex so minor differences in capitalization/spacing don't break the lookup
    const productRegex = new RegExp(product, 'i');
    const productlocator = this.page.getByText(productRegex);
    // use a slightly longer timeout for product visibility
    await productlocator.first().waitFor({state:'visible', timeout: 15000});
    await productlocator.first().click();
    return this.productPage;
  }
    
    


   

}
