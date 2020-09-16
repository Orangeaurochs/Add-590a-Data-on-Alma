javascript:(function() {
  var getActiveElement = function (element = document.activeElement) {
  var shadowRoot = element.shadowRoot ;
  var contentDocument = element.contentDocument;
  if (shadowRoot && shadowRoot.activeElement) {
    return getActiveElement(shadowRoot.activeElement);
  };
  if (contentDocument && contentDocument.activeElement) {
    return getActiveElement(contentDocument.activeElement);
  };
  return element;
};

  var activeEl=getActiveElement();

  var padding = function (number) {
    var strno = "";
    if (number < 10) {
      strno+= "0" + number.toString();
    }
    else {
      strno+=number.toString();
    }
    return strno;
  };

  var five90El = activeEl;
  var five90text = five90El.value;
  var dateNow = new Date();
  var todaysDate = "sgl" + padding(dateNow.getMonth()+1) + padding(dateNow.getDate());
  if (five90text.match (/sgl.... |$/)) {
    var new590text = five90text.replace(/sgl..../, todaysDate);
    five90El.value = new590text;
  }
  var event = new Event('change');
  five90El.dispatchEvent(event);

})();