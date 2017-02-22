jQuery(document).ready (function($){

 var box1 = $('#box1');
 var box2 = $('#box2');

    TweenMax.from (box1, 2, {opacity: 0, y: 50, ease:Power4.easeOut});
    TweenMax.from (box2, 2, {opacity: 0, ease:Power4.easeOut}, .7);

});
