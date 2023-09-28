$(async function () {
  const init = [
    Events.init
  ]

  init.forEach(x => x.call(null))
  
  Utils.fetch(`https://${window.GetParentResourceName()}/onLoad`).catch((e) => {})
})
