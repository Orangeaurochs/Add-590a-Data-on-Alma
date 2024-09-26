javascript:(function() {
  var collections = {	askews:"uclebkaskews",
				bloomsbury:"uclebkbloomsburysgl",
				bb:"uclebkbloomsburysgl",
				brepols:"uclebkbrepols",
				bp:"uclebkbrepols",
				brill:"uclebkbrillsgl",
				browns:"uclebkbrowns",
				cambridge:"uclebkcamsgl",
				cam:"uclebkcamsgl",
				cup:"uclebkcamsgl",
				cambridgecore:"uclebkcamsgl",
				cc:"uclebkcamsgl",
				credo:"uclebkcredo",
				degruyter:"uclebkdegruyter",
				dg:"uclebkdegruyter",
				proquest:"uclebkproquest",
				ebookcentral:"uclebkproquest",
				ec:"uclebkproquest",
				ebsco:"uclebkebsco",
				edwardelgar:"uclebkelgar",
				elgar:"uclebkelgar",
				ee:"uclebkelgar",
				igiglobal:"uclebkigi",
				igi:"uclebkigi",
				ig:"uclebkigi",
				johnbenjamins:"uclebkjohnbenjamins",
				benjamins:"uclebkjohnbenjamins",
				jb:"uclebkjohnbenjamins",
				jstor:"uclebkjstorsgl",
				muse:"uclebkmusesgl",
				projectmuse:"uclebkmusesgl",
				pm:"uclebkmusesgl",
				ore:"uclebkore",
				ovid:"uclebkovidsgl",
				oxfordreferenceonline:"uclebkorosgl",
				oxfordreference:"uclebkorosgl",
				oro:"uclebkorosgl",
				oxfordscholarshiponline:"uclebkososgl",
				oso:"uclebkososgl",
				peterlang:"uclebkpeterlang",
				lang:"uclebkpeterlang",
				pl:"uclebkpeterlang",
				sageknowledge:"uclebksagek",
				sage:"uclebksagek",
				sk:"uclebksagek",
				sciencedirect:"uclebksciencedirect",
				sd:"uclebksciencedirect",
				torrossa:"uclebktorrossa",
				upso:"uclebkupso",
				wiley:"uclebkwileysgl",
				worldscientific:"uclebkworldscientific",
				world:"uclebkworldscientific",
				ws:"uclebkworldscientific"};

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
  if (five90text.match (/^\$\$a ?$/)) {
    var thistag ="uclebk###";
    var coll = prompt("Please enter a collection name or abbreviation:");
    coll = coll.toLowerCase();
    coll = coll.replace(/[^a-zA-Z]/gi,"");
    if (collections[coll]) {thistag = collections[coll]};
    var new590text = five90text.replace(/\$a ?/, "$a "+thistag+" uncat");
    five90El.value = new590text;
  }
  else {alert ("The 590 needs to be blank")};
  var event = new Event('change');
  five90El.dispatchEvent(event);

})();