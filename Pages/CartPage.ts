import {Locator, Page} from "playwright"
import { PageUtils } from "../Utils/PageUtils";


export class CartPage extends PageUtils{

    page; 
   
    constructor(page:Page){
        super(page)
        this.page=page;
 
    }
    
  async get_CartPageHeader(){

    const CartPageHeader=this.page.locator("//h3[contains(text(),'CART')]");
    await CartPageHeader.waitFor({state:'visible',timeout:30000});
   
      return  CartPageHeader;
   
  }
  

  }
    
    


   