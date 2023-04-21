import { BUTTONS, EVENTS } from '../const'

export function navigate (href) {
  window.history.pushState({}, '', href)
  // Crear un evento personalizado
  const navigateEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigateEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === BUTTONS.primary // Primary - Left click
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to) // Navegación con SPA
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
