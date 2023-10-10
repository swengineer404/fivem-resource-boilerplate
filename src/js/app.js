$(async function () {
  Events.init()

  $(document).on('click', 'a', function (e) {
    e.preventDefault()
  })

  $(document).on('contextmenu', function (e) {
    return false
  })

  $(document).on('submit', function (e) {
    e.preventDefault()
  })

  Utils.fetch(`https://${window.GetParentResourceName()}/onLoad`).catch((e) => {})
})
