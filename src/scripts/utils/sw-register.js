const swRegister = async () => {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./sw.bundle.js');
        } catch (error) {
            console.log('ServiceWorker registration failed: ', error);
        }
    } else {
        console.log('ServiceWorker not supported in this browser');
    }
}

export default swRegister;