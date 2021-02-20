export function readPxs(el, style) {
  if(!el.style[style]) return 0
  return Number(el.style[style].split('px')[0])
}

export function writePxs(el, style, pxs) {
  return el.style[style] = `${pxs}px`
}
