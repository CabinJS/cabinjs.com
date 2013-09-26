$(function() {

  $('code[class^=lang]').click(function () {
    selectText($(this)[0]);
  });

  function selectText(element) {
      var doc = document
          , range, selection
      ;
      if (doc.body.createTextRange) { //ms
          range = doc.body.createTextRange();
          range.moveToElementText(element);
          range.select();
      } else if (window.getSelection) { //all others
          selection = window.getSelection();
          range = doc.createRange();
          range.selectNodeContents(element);
          selection.removeAllRanges();
          selection.addRange(range);
      }
  }
});