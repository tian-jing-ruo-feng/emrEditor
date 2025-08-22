import consola from "consola";
import type { ContextMenuParams } from "../../types/contextMenu";

export function useCustomContextMenu(rootElement: EMRElement, args: ContextMenuParams['1']) {
  const { PageElement, X: leftToCanvas, Y: topToCanvas } = args
  const { x: canvasOrginX, y: canvasOrignY } = PageElement.getBoundingClientRect()
  const left = canvasOrginX + leftToCanvas
  const top = canvasOrignY + topToCanvas
  consola.info('鼠标右键left, top', left, top);
  const contexMenuEle = document.getElementById('custom-context-menu')
  if (contexMenuEle) {
    contexMenuEle.style = `position: absolute; left: ${left}px; top: ${top}px; z-index: 999;`
  }
}