function encodeHTMLSource() {  var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },  matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;  return function() {    return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;  };};
String.prototype.encodeHTML=encodeHTMLSource();
var tmpl = {};
  tmpl['hello']=function anonymous(it
/**/) {
var out='<div class="row"><div class="col-xs-6 col-xs-push-3"><h1>'+(it.message)+'</h1><ul class="list-group">'; for (var i = 0; i < 7; i++) { out+='<li class="list-group-item"><span class="badge">'+(it.pkg[it.pkgs[i]])+'</span>'+(it.pkgs[i])+'</li>'; } out+='</ul></div></div>';return out;
};
module.exports = tmpl;