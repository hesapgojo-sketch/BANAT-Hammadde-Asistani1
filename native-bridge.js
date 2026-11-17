// Capacitor native notification bridge. Vite bundles this module for Android builds.
window.BanatLocalNotificationsReady = (async () => {
  if (!window.Capacitor?.isNativePlatform?.()) return false;
  try {
    const { LocalNotifications } = await import('@capacitor/local-notifications');
    window.BanatLocalNotifications = LocalNotifications;
    return true;
  } catch (error) {
    console.warn('Native notification plugin unavailable:', error);
    return false;
  }
})();
