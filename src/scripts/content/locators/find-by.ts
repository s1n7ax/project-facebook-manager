import By from "./by";
import DefaultElement from "../element/default-element";

export default function FindBy (prop: { by: By, value: string }): any {
    return function (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<DefaultElement>) {
        target[propertyKey] = new DefaultElement(prop.by, prop.value);
    };
}
