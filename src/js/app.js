$(async function () {
  Events.init()

  Utils.fetch(`https://${window.GetParentResourceName()}/onLoad`).catch((e) => {})
})
