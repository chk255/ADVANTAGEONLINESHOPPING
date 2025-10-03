import {Locator, Page} from "playwright"
import { PageUtils } from "../Utils/PageUtils";
import {LoginPage} from "./LoginPage"


export class LandingPage extends PageUtils{

    page; 
    LOGINICON;
    private loginPage:LoginPage
    

    constructor(page:Page){
        super(page)
        this.page=page;
        this.LOGINICON=page.locator("#hrefUserIcon");
        this.loginPage=new LoginPage(page);
    }

    async GoTo_LoginPage(){
        await this.Click(this.LOGINICON);
        return this.loginPage;
    }

}
