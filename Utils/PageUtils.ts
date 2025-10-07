import { Locator, Page } from "playwright";



export class PageUtils{

    page;
    
    constructor(page:Page){

        this.page=page;
        
        
    }

    async Click(Element:Locator){
        await Element.click();
    }
     async Enter(Element:Locator,Values:string){
        await Element.fill(Values);
    }

    async Goto_CART(){
        const Cart_ICON=this.page.locator("svg#menuCart");
        await Cart_ICON.waitFor();
        await Cart_ICON.click();
        

    }


}