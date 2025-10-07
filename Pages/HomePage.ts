import {Locator, Page} from "playwright"
import { PageUtils } from "../Utils/PageUtils";
import { CategoryPage } from "./CategoryPage";


export class HomePage extends PageUtils{

    page; 
    private USERNAME;
    private SEARCHICON;
    private SEARCH;
    private SEARCHCATEGORYPRODUCTNAMES;
    private SEARCHPRODUCTCATEGORY;
    private categoryPage:CategoryPage;
    
    
    

    constructor(page:Page){
        super(page)
        this.page=page;
        this.USERNAME=page.locator("//span[text()='chandan.kumar']").last();
        this.SEARCHICON=page.locator("#search");
        this.SEARCH=page.locator("#autoComplete");
        this.SEARCHCATEGORYPRODUCTNAMES=page.locator("//div[@class='top6Products']/a/p");
        this.SEARCHPRODUCTCATEGORY=page.locator("//div[@class='top6Products']/h3");
        this.categoryPage=new CategoryPage(page);
    }
    async get_USERNAME(){
     
        await this.USERNAME.waitFor({state:"visible"});
         return this.USERNAME;
    
    }
    async Search_Product(productName:string){
       // await this.page.waitForLoadState("domcontentloaded");
       await this.SEARCHICON.waitFor();
        await this.Click(this.SEARCHICON);
        await this.SEARCH.waitFor();
        await this.Enter(this.SEARCH,productName);
        this.page.keyboard.press('Enter');
    }

    async get_Search_Category(){
        await this.SEARCHPRODUCTCATEGORY.waitFor();
        await this.SEARCHPRODUCTCATEGORY.isVisible();
        return await this.SEARCHPRODUCTCATEGORY.textContent();       
    }

    async get_Search_Category_Product_Names(){
        const ProductsName=await this.SEARCHCATEGORYPRODUCTNAMES.allTextContents();
        return ProductsName;
    }
    async Select_Category(Category:string){
        const category=this.page.locator("//span[text()='"+Category+"']");
        await category.waitFor();
        await this.Click(category);
        return this.categoryPage;

    }
    


   

}
