const MainHeader = document.getElementById("MainHeader")
const Parra = document.getElementById("ParaTest1")

const ArrayLang = ["Hello There!", "Hola!", "こんにちは!", "안녕하십니까!", "Apa Khabar?", "Guten Tag!", "Bonjour!", "Grüß Gott!", "!السلام عليكم", "Moïen!"]
var arrayLength = ArrayLang.length;


textSequence(0);
        function textSequence(i) {
            if (arrayLength > i) {
                setTimeout(function() {
                    MainHeader.innerHTML = ArrayLang[i];
                    textSequence(++i);
                }, 2000); // 1 second (in milliseconds)

            } else if (arrayLength == i) { 
                textSequence(0);
            }

        }

eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(3(){(3 a(){8{(3 b(2){7((\'\'+(2/2)).6!==1||2%5===0){(3(){}).9(\'4\')()}c{4}b(++2)})(0)}d(e){g(a,f)}})()})();',17,17,'||i|function|debugger|20|length|if|try|constructor|||else|catch||5000|setTimeout'.split('|'),0,{}))
