(function(d){
    var b = d.getElementsByClassName('ukey1-button2');
    var c = b.length;
    var el = 'SPAN';
    var icons = ['uk1', 'ggl', 'fcb', 'lin'];
    
    if (c > 0) {
        for (var i = 0; i < c; i++) {
            var s1 = d.createElement(el), 
            s2 = d.createElement(el);
            
            s1.className = 'uk1-b2-text';
            s1.innerHTML = b[i].innerHTML;
            
            b[i].innerHTML = '';
            b[i].appendChild(s1);
            
            for (var j = 0; j < icons.length; j++) {
                var si = d.createElement(el);
                si.className = icons[j];
                s2.appendChild(si);
            }
            
            s2.className = 'uk1-b2-icons';
            b[i].appendChild(s2);
        }
    }
})(document);