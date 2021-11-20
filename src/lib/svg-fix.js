/**
 * Fixes SVG image rendering on Safari for documents
 * generated by Google Presentation
 *
 * @param {HTMLElement} htmlElement
 */
export function svgFix(htmlElement) {
  const gElements = selectGraphicElementsFrom(htmlElement);
  if (gElements.length > 0) {
    const getCP = getClipPathFinder(htmlElement);
    fixClipPathRefs(gElements, getCP);
  }
}

/**
 * Selects all the <g> with clip-path attribute. This is needed
 * for handling the nested clip-path references.
 *
 * On the Example bellow you'll see that #clippath1 refers #clippath0
 * which is common for docs generated by Google Presentation.
 *
 * ```
 * <svg:clipPath id="clippath0" >...</svg:clipPath>
 * <svg:clipPath id="clippath1" clip-path="url(#clippath0)">...</svg:clipPath>
 * ```
 * This causes images not to display on Safari Browsers
 *
 */
const selectGraphicElementsFrom = (htmlElement) =>
  htmlElement.querySelectorAll("g[clip-path]");

/**
 * Run through `<g>` elements fixing clip-paths references
 *
 * @param {NodeList} gElements Elements to fix
 * @param {Function} getCP clip-path getter function
 */
function fixClipPathRefs(gElements, getCP) {
  gElements.forEach((element) => {
    const oldId = extractClipPathId(element.getAttribute("clip-path"));
    const fixedId = getCP(oldId).id;
    element.setAttribute("clip-path", createCSSPathRef(fixedId));
  });
}

/**
 * Returns a recursive function that gets `<clip-path>` tags by id.
 * It goes up the clip-path hierarchy to get the root clip-path.
 *
 * @param {HTMLElement} htmlElement
 */
function getClipPathFinder(htmlElement) {
  const selector = (clipPathId) =>
    htmlElement.querySelector(`clipPath#${clipPathId}`);

  const rootClipPath = (clipPathId) => {
    let el = selector(clipPathId);
    if (el.hasAttribute("clip-path")) {
      const nestedId = extractClipPathId(el.getAttribute("clip-path"));
      el = rootClipPath(nestedId);
    }

    return el;
  };

  return rootClipPath;
}

/**
 * Gets a clip-path attribute and extracts the clip-path id from it
 *
 * @param {string} idSelector
 * @returns
 */
function extractClipPathId(idSelector) {
  const reId = /\#([\w\-]+)/gi;
  const r = reId.exec(idSelector);
  console.log("[extractClipPathId]", { idSelector, r });
  return r[1];
}

/**
 * Creates a clip-path attribute value using `url()` format
 *
 * @param {string} id
 * @returns
 */
const createCSSPathRef = (id) => `url(#${id})`;
