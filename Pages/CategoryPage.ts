import {Locator, Page} from "playwright"
import { PageUtils } from "../Utils/PageUtils";


export class CategoryPage extends PageUtils{

    page; 
    private CATEGORYTITLE;
    
    
    

    constructor(page:Page){
        super(page)
        this.page=page;
        this.CATEGORYTITLE=page.locator("//h3[contains(@class,'categoryTitle')]");
       
       
    }
  async get_CategoryTitle(){
    return this.CATEGORYTITLE;
  }
    
    


   

}
