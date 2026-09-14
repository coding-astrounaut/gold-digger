import path from 'node:path';
import fs from 'node:fs';

export async function handleBuy(req) {
    const amountBought = req.body.amount;
    const price = req.body.price;
    const time = new Date().toISOString();
    const logPath = path.join('logs', 'buy.log');
    await fs.promises.appendFile(logPath, `${time}: Bought ${amountBought} gold at $${price} per ounce.\n`);
    return `${time}: Bought ${amountBought} gold at $${price} per ounce.\n`;
}