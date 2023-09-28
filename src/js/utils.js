class Utils {
  static async fetch(url, method, options) {
    return await $.ajax({ url: url, method: method || "GET", timeout: options?.timeout ?? 120000, ...options });
  }

  static async sleep(duration) {
    return new Promise((resolve) => setTimeout(resolve, duration));
  }
}
