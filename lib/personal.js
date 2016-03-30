'use strict';

var craziness = operative({

    doCrazy: function(cb) {

        console.time('Craziness');
        for (var i = 0; i < 10000000000; ++i);
        console.timeEnd('Craziness');

        cb('I am done!');
    }

});

craziness.doCrazy(function(result) {
    // Console outputs: Craziness: 14806.419ms
    result; // => "I am done!"
});