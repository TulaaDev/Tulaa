<script type='text/javascript'>
$(document).ready(function(){
$("img.a").hover(
function() {
$(this).stop().animate({"opacity": "0"}, "slow");
},
function() {
$(this).stop().animate({"opacity": "1"}, "slow");
});

});
</script>
