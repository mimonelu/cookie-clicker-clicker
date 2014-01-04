(function(w) {

    if (w.ccc) {

        var ci = clearInterval;
        ci(w.ccc.bct);
        ci(w.ccc.gct);
        w.ccc = null;

    } else {

        w.ccc = (function() {

            var d = document,
                bc = d.getElementById('bigCookie'),
                gc = d.getElementById('goldenCookie'),
                sp = d.getElementById('seasonPopup'),
                bct = null,
                gct = null,
                si = setInterval,
                me = d.createEvent('MouseEvents');

            me.initMouseEvent('click');

            return {

                bct: si(function() {
                    bc.dispatchEvent(me);
                }, 10),

                gct: si(function() {
                    if (gc.style.display != 'none') {
                     // if (gc.style.backgroundImage.indexOf('wrathCookie') === -1) {
                            gc.dispatchEvent(me);
                            console.log('Got a golden cookie!');
                     // } else {
                     //     console.log('I don\'t get red cookie...');
                     // }
                    }
                    if (sp.style.display != 'none') {
                        sp.dispatchEvent(me);
                        console.log('Got a season popup!');
                    }
                }, 1000)

            };

        })();

    }

})(this);
