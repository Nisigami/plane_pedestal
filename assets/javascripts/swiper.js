<script type="text/javascript">
/*======
ドキュメントレディかウィンドウがロードされてから使用すること
例:
jQueryだったら: $(function() { ...code here... })

もしくはJavaScriptのみでwindowがloadされたときにスタートさせるなら
window.onload = function() { ...code here ...}

もしくはJavaScriptのみでdocumentがreadyになったときにスタートさせるなら
document.addEventListener('DOMContentLoaded', function(){ ...code here... }, false)

という感じで
=======*/

/*
jQueryまたはZeptoの場合。
*/
$(function(){
  var mySwiper = $('.swiper-container').swiper({
    //オプションをここに:
    mode:'horizontal',
    loop: true
    //etc..
  });
})

/* 上か下かのどちらかを記述する。jQueryを使っていない人は↓こちらだけ。使っている人は↑だけ。 */

window.onload = function() {
  var mySwiper = new Swiper('.swiper-container',{
    //オプションをここに:
    mode:'horizontal',
    loop: true
    //etc..
  });
}
</script>
