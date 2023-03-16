
export const getPermission = async () => {
  const status = await Notification.requestPermission()
  console.log('Notification permission status:', status);
  alert(`Permission for notifications was "${status}"`);
};

export const checkPushManager = async () => {
  try {
    const registration = await navigator.serviceWorker.getRegistration()
    // const registration = await navigator.serviceWorker.ready
    const pushManager = registration.pushManager
    console.log('pushManager', pushManager)
    if (!pushManager) {
      console.log('No pushManager')
      alert('No pushManager');
      return
    }
    const subscription = await pushManager.getSubscription()
    console.log('subscription', subscription)
    if (!subscription) {
      console.log('No subscription, this is ok')
      alert('Push manager and subscription check worked');
      return
    }
    alert('Push manager and subscription exists');
  } catch (err) {
    console.error('error while getting subscription', err);
    alert(`Error while getting subscription ${err}`);
  }
};
