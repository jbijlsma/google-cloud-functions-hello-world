import { getHelloMsg as myGetHelloMsg } from "./hello";
import { getGoodbyeMsg as myGetGoodbyeMsg } from "./goodbye";

export namespace Messages {
  export const getHelloMsg = myGetHelloMsg;
  export const getGoodbyeMsg = myGetGoodbyeMsg;
}
