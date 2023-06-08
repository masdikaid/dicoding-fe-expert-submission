import {openDB} from "idb";
import CONFIG from "../global/config";

const {DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME} = CONFIG
const db = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
        database.createObjectStore(OBJECT_STORE_NAME, {keyPath: "id"});
    }
})

const RestaurantIdb = {
    async getAllRestaurants() {
        return (await db).getAll(OBJECT_STORE_NAME);
    },
    async getRestaurant(id) {
        return (await db).get(OBJECT_STORE_NAME, id);
    },
    async updateRestaurant(restaurant) {
        return (await db).put(OBJECT_STORE_NAME, restaurant);
    },
    async deleteRestaurant(id) {
        return (await db).delete(OBJECT_STORE_NAME, id);
    }
}

export default RestaurantIdb;