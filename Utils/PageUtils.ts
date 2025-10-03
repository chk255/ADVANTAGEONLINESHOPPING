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


}