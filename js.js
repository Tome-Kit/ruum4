/**
 * This function creates a link.
 * 
 * @param string div the <code>div</code> the link should be appended to
 * @param string id the identifier of the link anchor
 * @param string href the hyperlink
 * @param string text the link text
 */
function createLink(div, id, href, text) {
  let a = document.createElement("a");
  a.setAttribute("id", id);
  a.setAttribute("href", href);
  a.innerHTML = text;
  let p = document.createElement("p");
  p.appendChild(a);
  div.appendChild(p);
}

/**
 * This function manages targets and links.
 */
function setTargets() {

  let divs = document.getElementsByClassName("csl-entry");
  
  for (let i = 0; i < divs.length; i++) {
    let as = divs[i].getElementsByTagName("a");
    
    for (let j = 0; j < as.length; j++)
    {
       as[j].target = "_blank";
    }
  
  }
  
  document.getElementById("book-edit").target = "GitHub";
  document.getElementById("book-repo").target = "GitHub";
  document.getElementById("book-source").target = "GitHub";
  
  let div = document.getElementById("main-nav").getElementsByTagName("nav")[0].getElementsByClassName("book-extra")[0];
  createLink(div, "book-print", "ruum4.pdf", "View printable book");
  let nameOfPresentation = "presentation_mid-term_group1";
  createLink(div, "presentation-" + nameOfPresentation, "qmd/" + nameOfPresentation + "/" + nameOfPresentation + ".html", "Group 1");
  createLink(div, "presentation-speaker-" + nameOfPresentation, "qmd/" + nameOfPresentation + "/" + nameOfPresentation + "-speaker.html", "Remote control");
  nameOfPresentation = "presentation_mid-term_katriin";
  createLink(div, "presentation-" + nameOfPresentation, "qmd/" + nameOfPresentation + "/" + nameOfPresentation + ".html", "nelJapäevalised");
  createLink(div, "presentation-speaker-" + nameOfPresentation, "qmd/" + nameOfPresentation + "/" + nameOfPresentation + "-speaker.html", "Remote control");
}

window.onload = function () {
  setTargets();
};
