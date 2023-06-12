import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    const wb = new WorkboxWindow.Workbox('./sw.bundle.js');
    try {
      await wb.register();
    } catch (e) { /* empty */
    }
  }
};

export default swRegister;
