import HTTP from "../utils/http-request";
import ENDPOINT from "../global/endpoint";

export default class Restaurant {
    static async list() {
        const data = await HTTP.get(ENDPOINT.LIST);
        return data.restaurants;
    }
}