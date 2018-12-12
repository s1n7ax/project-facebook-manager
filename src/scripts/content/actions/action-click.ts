import IPageAction from "./i-page-action";
import StaticImplements from "../../common/static-implements";
import Locate from "../locators/locate";
import ClickRequestModel from "../../common/command/models/click-request-model";
import By from "../locators/by";
import ClickResponseModel from "../../common/command/models/click-response-model";


/**
 * Click - handle click on an element
 */
@StaticImplements<IPageAction>()
export default class ActionClick {

    static run(data: ClickRequestModel): ClickResponseModel {
        this.exec(data.by, data.value);

        return new ClickResponseModel();
    }

    static exec(by: By, value: string) {
        let ele = Locate.getElement(by, value);
        ele.click();
    }
}