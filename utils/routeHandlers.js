import { generateGoldPrice } from './generateGoldPrice.js';
import { sendResponse } from './sendResponse.js';
import { handleBuy } from './handleBuy.js';

export async function handlePriceRequest(res) {
    const price = generateGoldPrice();
    sendResponse(res, 200, 'application/json', JSON.stringify({ price }));
}

export async function handleBuyRequest(req, res) {
    try {
        const message = await handleBuy(req);
        sendResponse(res, 200, 'application/json', JSON.stringify({ message }));
    } catch (error) {
        sendResponse(res, 400, 'application/json', JSON.stringify({ error: `Failed to process purchase. ${error.message}` }));
    }
}