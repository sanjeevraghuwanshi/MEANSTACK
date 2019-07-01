import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "../shared/shared.module";
import { CoreModule } from '../core/core.module';

const sandboxConfig ={
    imports:[SharedModule,CoreModule,RouterTestingModule],
    declarations:[],
    providers:[]
    
}