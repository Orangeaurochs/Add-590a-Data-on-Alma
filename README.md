# Add-590a-Data-on-Alma
Adds standard ebook tags to ordering records: prompts for vernacular package name, which is converted to a standard tag, plus another tag "uncat" to signify uncatalogued, and a dated tag. To install the bookmarklet, add the following code into the URL or Location section of a new bookmark:

```javascript:(function() {   var collections = {askews:"uclebkaskews", bloomsbury:"uclebkbloomsburysgl", bb:"uclebkbloomsburysgl", brepols:"uclebkbrepols", bp:"uclebkbrepols", brill:"uclebkbrillsgl", cambridge:"uclebkcamsgl", cam:"uclebkcamsgl", cup:"uclebkcamsgl", cambridgecore:"uclebkcamsgl", cc:"uclebkcamsgl", credo:"uclebkcredo", degruyter:"uclebkdegruyter", dg:"uclebkdegruyter", proquest:"uclebkproquest", ebookcentral:"uclebkproquest", ec:"uclebkproquest", ebsco:"uclebkebsco", edwardelgar:"uclebkelgar", elgar:"uclebkelgar", ee:"uclebkelgar", igiglobal:"uclebkigi", igi:"uclebkigi", ig:"uclebkigi", johnbenjamins:"uclebkjohnbenjamins", benjamins:"uclebkigi", jb:"uclebkigi", jstor:"uclebkjstorsgl", muse:"uclebkmusesgl", projectmuse:"uclebkmusesgl", pm:"uclebkmusesgl", ore:"uclebkore", ovid:"uclebkovidsgl", oxfordreferenceonline:"uclebkorosgl", oxfordreference:"uclebkorosgl", oro:"uclebkorosgl", oxfordscholarshiponline:"uclebkososgl", oso:"uclebkososgl", peterlang:"uclebkpeterlang", lang:"uclebkpeterlang", pl:"uclebkpeterlang", sageknowledge:"uclebksagek", sage:"uclebksagek", sk:"uclebksagek", sciencedirect:"uclebksciencedirect", sd:"uclebksciencedirect", torrossa:"uclebktorrossa", upso:"uclebkupso", wiley:"uclebkwileysgl", worldscientific:"uclebkworldscientific", world:"uclebkworldscientific", ws:"uclebkworldscientific"};   var getActiveElement=function(document){     document=document||window.document;     if(document.body===document.activeElement||document.activeElement.tagName=='IFRAME'){       var iframes=document.getElementsByTagName('iframe');       for(var i=0;i<iframes.length;i++){         var focused=getActiveElement(iframes[i].contentWindow.document);         if(focused!==false){           return focused;         }       }     }     else return document.activeElement;     return false;   };    var activeEl=getActiveElement();    var padding = function (number) {     var strno = "";     if (number < 10) {       strno+= "0" + number.toString();     }     else {       strno+=number.toString();     }     return strno;   };    var five90El = activeEl;   var five90text = five90El.value;   var dateNow = new Date();   var todaysDate = "sgl" + padding(dateNow.getMonth()+1) + padding(dateNow.getDate());   if (five90text.match (/^\$\$a ?$/)) {     var thistag ="uclebk###";%20%20%20%20%20var%20coll%20=%20prompt("Please%20enter%20a%20collection%20name%20or%20abbreviation:");%20%20%20%20%20coll%20=%20coll.toLowerCase();%20%20%20%20%20coll%20=%20coll.replace(/[^a-zA-Z]/gi,"");%20%20%20%20%20if%20(collections[coll])%20{thistag%20=%20collections[coll]};%20%20%20%20%20var%20new590text%20=%20five90text.replace(/\$a%20?/,%20"$a%20"+thistag+"%20uncat%20"+todaysDate);%20%20%20%20%20five90El.value%20=%20new590text;%20%20%20}%20%20%20else%20{alert%20("The%20590%20needs%20to%20be%20blank")};%20%20%20var%20event%20=%20new%20Event('change');%20%20%20five90El.dispatchEvent(event);%20%20})();```

To use the bookmarklet:
* Click on the 590 field in a record. You will probably need to add one.
* Click on the bookmarklet on the bookmarks toolbar
