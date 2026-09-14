
setInterval(async () => {
    try {
        const data = await fetch('/api');
        const jsonData = await data.json();
        
        if (document.getElementById('price-display')) {
            document.getElementById('price-display').textContent = jsonData.price;
        }
        if (document.getElementById('connection-status')) {
            document.getElementById('connection-status').textContent = 'Live Price 🟢';
        }
    } catch (error) {
        console.error('Error fetching live price:', error);
        if (document.getElementById('connection-status')) {
            document.getElementById('connection-status').textContent = 'Live Price 🔴';
        }
    }
}, 2000);

// 2. Safely attach the form listener outside the main try block
const investmentForm = document.getElementById('investment-form');
const outputDialog = document.querySelector('dialog.outputs');
const closeDialogBtn = outputDialog.querySelector('button');

if (investmentForm) {
    investmentForm.addEventListener('submit', async (event) => {
        // This runs instantly before any async code can crash
        event.preventDefault(); 
        
        try {
            const investmentAmount = document.getElementById('investment-amount').value;
            const response = await fetch('./api', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: investmentAmount })
            });
            const result = await response.json();

            console.log('Purchase result:', result);
            document.getElementById('investment-summary').textContent = result.message;

            outputDialog.showModal();

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    });
}

if (closeDialogBtn) {
    closeDialogBtn.addEventListener('click', () => {
        outputDialog.close();
    })}