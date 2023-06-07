import * as WorkboxWindow from "workbox-window";

const swRegister = async () => {
    if (!'serviceWorker' in navigator) {
        console.log('ServiceWorker not supported in this browser');
    }
    const wb = new WorkboxWindow.Workbox('./sw.bundle.js');

    try {
        await wb.register();
        console.log('ServiceWorker registration successful');
    } catch (e) {
        console.log('ServiceWorker registration failed');
    }
}

export default swRegister;