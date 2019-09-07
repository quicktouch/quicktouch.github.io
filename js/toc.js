(function () {
  var tocContent = document.getElementById ('TableOfContents');
  if (!tocContent) return;
  do {
    var li, ul = tocContent.querySelector ('ul');
    if (!ul) {
      break;
    }
    if (ul.childElementCount !== 1) break;
    li = ul.firstElementChild;
    if (li.tagName !== 'LI') break;
    ul.outerHTML = li.innerHTML;
  } while (tocContent.childElementCount >= 1);
}) ();

var toc = document.getElementById ('toc');
var topWrapper = document.getElementById ('body-wrapper').offsetTop;
if (toc != null && topWrapper != null) {
  toc.classList.remove ('toc-fixed');
  window.addEventListener ('scroll', scrollcatelogHandler);
  function scrollcatelogHandler (e) {
    var event = e || window.event, target = event.target || event.srcElement;
    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > topWrapper - 30) {
      toc.classList.add ('toc-fixed');
    } else {
      toc.classList.remove ('toc-fixed');
    }
  }
}

window.onload = function (e) {
  let orgHtmls = document.querySelectorAll ('h1,h2,h3,h4,h5');
  window.addEventListener ('scroll', function (e) {
    let scrollTop = $ (this).scrollTop ();
    for (let seg of orgHtmls) {
      if (seg.offsetTop - 100 > scrollTop) {
        continue;
      }    
      let link = '#' + $ (seg).attr ('id');
      if(link){
        $ ('#toc a').removeClass ('highlighted');
        $ ('#toc a[href="' + link + '"]').addClass ('highlighted');
      }      
    }
  });
};
