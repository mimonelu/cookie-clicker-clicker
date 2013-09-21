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
                        gc.dispatchEvent(me);
                        console.log('Got Golden Cookie!');
                    }
                }, 1000)

            };

        })();

    }

})(this);
