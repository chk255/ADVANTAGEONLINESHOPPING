import {Locator, Page} from "playwright"
import { PageUtils } from "../Utils/PageUtils";
import { HomePage } from "./HomePage";


export class LoginPage extends PageUtils{

    page; 
    private USERNAME;
    private PASSWORD;
    private SIGNIN;
    private ERROR;
    private homePage:HomePage;
    

    constructor(page:Page){
        super(page)
        this.page=page;
        this.USERNAME=page.locator("input[name='username']");
        this.PASSWORD=page.locator("input[name='password']");
        this.SIGNIN=page.locator("#sign_in_btn");
        this.ERROR=page.locator("#signInResultMessage");
        this.homePage=new HomePage(page);
    }

    async get_ERROR(){
        await this.page.waitForTimeout(3000)
        await this.ERROR.waitFor()
        return await this.ERROR.textContent();
    }

    async Login_With(USERID:string,PASSWORD:string){
        await this.Enter(this.USERNAME,USERID);
        await this.Enter(this.PASSWORD,PASSWORD);
        if(await this.SIGNIN.isEnabled()){
        await this.Click(this.SIGNIN);
        }
        return this.homePage;
    }

}
