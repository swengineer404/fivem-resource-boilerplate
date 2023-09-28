class Events {
  static init() {
    this.events = {}

    window.addEventListener('message', (e) => {
      this.events[e.data.eventName]?.call(null, e.data.data)
    })
  }

  static on(eventName, callback) {
    this.events[eventName] = callback
  }

  static async triggerAsync(eventName, data, cb) {
    let res = await Utils.fetch(`https://${window.GetParentResourceName()}/event`, 'POST', {
      dataType: 'json',
      data: JSON.stringify({ eventName: eventName, data: data }),
    })
    if (cb) {
      cb(res)
    }
  }

  static async trigger(eventName, data, options) {
    return await Utils.fetch(`https://${window.GetParentResourceName()}/event`, 'POST', {
      dataType: 'json',
      data: JSON.stringify({ eventName: eventName, data: data }),
      ...options,
    })
  }

  static triggerInternal(eventName, data) {
    this.events[eventName]?.call(null, data)
  }
}
