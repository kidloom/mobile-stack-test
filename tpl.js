var tpl = (function(){
function encodeHTMLSource() {  var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },  matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;  return function() {    return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;  };};
String.prototype.encodeHTML=encodeHTMLSource();
var tmpl = {};
  tmpl['template']=function anonymous(it
/**/) {
var out='<section>  <header>  <h2>Hello</h2>  </header>  <article>  <p>'+(it.message)+'</p>  <input value="'+(it.message)+'" />  <p>Data from parent</p>  <a href="'+(it.path)+'">Go to Stocks</a>  </article> </section> ';return out;
};
return tmpl;})();