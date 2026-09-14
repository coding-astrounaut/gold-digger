import { generateGoldPrice } from './generateGoldPrice.js';
import { sendResponse } from './sendResponse.js';
import { handleBuy } from './handleBuy.js';
import { parseJSONBody } from './parseJSONBody.js';

export async function handlePriceRequest(res) {
    const price = generateGoldPrice();
    sendResponse(res, 200, 'application/json', JSON.stringify({ price }));
    return price;
}

export async function handleBuyRequest(req, res, price) {
    try {
        const parsedBody = await parseJSONBody(req);
        const message = await handleBuy(parsedBody.amount, price);
        console.log(`Purchase logged: ${message}`);
        sendResponse(res, 200, 'application/json', JSON.stringify({ message }));
    } catch (error) {
        console.error('Error processing purchase:', error);
        sendResponse(res, 400, 'application/json', JSON.stringify({ error: `Failed to process purchase. ${error.message}` }));
    }
}