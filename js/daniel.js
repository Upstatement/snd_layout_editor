$(function() {
  'use strict';

  var $vergeContent = $(".l-container");

  $("a").removeAttr("href",$vergeContent);

  var draggable_classes = ['.m-entry-slot','.m-hero__slot'];

  var entry_slot_placeholder = '<ul class="m-entry-slot__labels"><li><a>TK TK</a></li></ul>\
  <h3><a>Placeholder Hed</a></h3>\
  <div class="m-entry-slot__meta">\
      <strong><a class="author">Nooooobody</a></strong>\
      <em><span class="m-entry-slot__long-date">Never</span><span class="m-entry-slot__short-date">NEVER</span></em>\
      <a class="p-comment-count heat3">666</a>\
  </div>\
  <a><div class="p-dynamic-image vox-lazy-load lazy-loaded"></div></a>\
  <div class="m-entry-slot__blurb"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend diam sit amet ante viverra vehicula. Sed in urna a est ornare feugiat sit amet et leo. Cras rutrum sagittis enim vel ultricies. Donec eget arcu eget tortor porttitor pharetra. Nullam et rhoncus urna, eu finibus nibh. Etiam sed tellus aliquet diam ultrices elementum. Vestibulum aliquam felis et enim accumsan, quis hendrerit lorem dictum.</p></div>\
    <q><a>PULLQUOTE TK</a></q>';

  var dragSrcEl = null;

  function handleDragStart(e) {
    // Target (this) element is the source node.
    // this.style.opacity = '0.4';

    dragSrcEl = this;

    // e.dataTransfer.effectAllowed = 'move';
    // e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault(); // Necessary. Allows us to drop.
    }

    return false;
  }

  function handleDragEnter(e) {
    // this / e.target is the current hover target.
    this.classList.add('over');
  }

  function handleDragLeave(e) {
    this.classList.remove('over');  // this / e.target is previous target element.
  }

  function handleDrop(e) {
    // this/e.target is current target element.

    if (e.stopPropagation) {
      e.stopPropagation(); // Stops some browsers from redirecting.
    }

    // Don't do anything if dropping the same column we're dragging.
    if (dragSrcEl != this) {
      // var foo = this.innerHTML;
      // console.log(foo);
      this.innerHTML = dragSrcEl.innerHTML;
      dragSrcEl.innerHTML = entry_slot_placeholder;
    }

    return false;
  }

  draggable_classes.forEach(function(c) {
    $(c,$vergeContent).attr("draggable","true")
        .on('dragstart', handleDragStart)
        .on('dragenter', handleDragEnter)
        .on('dragover', handleDragOver)
        .on('dragleave', handleDragLeave)
        .on('drop', handleDrop);
  })


});