import HTTP from '../utils/http-request';
import ENDPOINT from '../global/endpoint';

export default class RestaurantApi {
  static async list() {
    const data = await HTTP.get(ENDPOINT.LIST);
    return data.restaurants;
  }

  static async detail(id) {
    const data = await HTTP.get(ENDPOINT.DETAIL(id));
    return data.restaurant;
  }

  static async review(data) {
    const response = await HTTP.post(ENDPOINT.REVIEW, data);
    return response.customerReviews.reverse();
  }
}
