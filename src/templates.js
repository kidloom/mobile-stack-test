function encodeHTMLSource() {  var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },  matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;  return function() {    return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;  };};
String.prototype.encodeHTML=encodeHTMLSource();
var tmpl = {};
  tmpl['hello']=function anonymous(it
/**/) {
var out=''+(it.message)+'<div class="row content-menu"><div class="col-xs-3" onclick="Helper.getContent(\'book\');"><div class="btn-book"><div class="alpha-layer"></div><img class="img-responsive" src="http://amazonia.storage.googleapis.com/v23/arpersonal/img/all/icon-book.png"/><a class="text-book"></a></div></div><div class="col-xs-3" onclick="Helper.getContent(\'video\');"><div class="btn-video"><div class="alpha-layer"></div><img class="img-responsive" src="http://amazonia.storage.googleapis.com/v23/arpersonal/img/all/icon-video.png"/><a class="text-videos"></a></div></div><div class="col-xs-3" onclick="Helper.getContent(\'trivia\');"><div class="btn-trivia"><div class="alpha-layer"></div><img class="img-responsive" src="http://amazonia.storage.googleapis.com/v23/arpersonal/img/all/icon-trivia.png"/><a class="text-trivia"></a></div></div><div class="col-xs-3" onclick="Helper.getContent(\'memotest\');"><div class="btn-memo"><div class="alpha-layer"></div><img class="img-responsive" src="http://amazonia.storage.googleapis.com/v23/arpersonal/img/all/icon-memo.png"/><a class="text-memo"></a></div></div></div><div id="content" class="row content-list"></div>';return out;
};
module.exports = tmpl;