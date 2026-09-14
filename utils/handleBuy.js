import path from 'node:path';
import fs from 'node:fs';

export async function handleBuy(amount, price) {
    const amountBought = amount / price;
    const time = new Date().toISOString();
    const logPath = path.join('logs', 'buy.log');
    await fs.promises.appendFile(logPath, `${time}: Bought ${amountBought}oz gold at $${price} per ounce.\n`);
    return `${new Date(time).toLocaleString()}: Bought ${Math.round(amountBought * 100) / 100}oz gold at $${price} per ounce.\n`;
}