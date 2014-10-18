$(function() {
  'use strict';

  var $vergeContent = $(".l-container");

  $("a").removeAttr("href",$vergeContent);

  var draggable_classes = ['.m-entry-slot','.m-hero__slot'];

  function handleDragStart(e) {
    this.style.opacity = '0.4';  // this / e.target is the source node.
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
    }

    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

    return false;
  }

  function handleDragEnter(e) {
    // this / e.target is the current hover target.
    this.classList.add('over');
  }

  function handleDragLeave(e) {
    this.classList.remove('over');  // this / e.target is previous target element.
  }

  draggable_classes.forEach(function(c) {
    $(c,$vergeContent).attr("draggable","true")
        .on('dragstart', handleDragStart)
        .on('dragenter', handleDragEnter)
        .on('dragover', handleDragOver)
        .on('dragleave', handleDragLeave);
  })


});