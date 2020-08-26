javascript:(function() {
  var collections = {	askews:"uclebkaskews",
				bloomsbury:"uclebkbloomsburysgl",
				bb:"uclebkbloomsburysgl",
				brepols:"uclebkbrepols",
				bp:"uclebkbrepols",
				brill:"uclebkbrillsgl",
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
				benjamins:"uclebkigi",
				jb:"uclebkigi",
				jstor:"uclebkjstorsgl",
				ore:"uclebkore",
				ovid:"uclebkovidsgl",
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
  var getActiveElement=function(document){
    document=document||window.document;
    if(document.body===document.activeElement||document.activeElement.tagName=='IFRAME'){
      var iframes=document.getElementsByTagName('iframe');
      for(var i=0;i<iframes.length;i++){
        var focused=getActiveElement(iframes[i].contentWindow.document);
        if(focused!==false){
          return focused;
        }
      }
    }
    else return document.activeElement;
    return false;
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
    var new590text = five90text.replace(/\$a ?/, "$a "+thistag+" uncat "+todaysDate);
    five90El.value = new590text;
  }
  else {alert ("The 590 needs to be blank")};
  var event = new Event('change');
  five90El.dispatchEvent(event);

})();