

//上传头像
$(window).load(function() {
	$('#upload-file').on('change', function(){
		var fimg = this.files[0];
		var filter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;
	    if(this.files.length !== 0){
		if(!filter.test(fimg.type)){
			alertBoxSmall("请选择有效的图片文件！");
		}else if(parseInt(fimg.size/1024) > 1024){
			alertBoxSmall("图片大小不得超过1M！");
		}else{
		var reader = new FileReader();
		reader.onload = function(e) {
			$("#avatar")[0].src = e.target.result;
			cropped();
			$('img#avatar').imgAreaSelect({
					aspectRatio: "1:1",
					x1: 100,
					y1:0,
					x2: 300,
					y2: 200,
				});
			}
		reader.readAsDataURL(this.files[0]);
		}
		}
	})
	//$('#btnCrop').on('click', cropped);
});

function cropped(){
	var img = $("#avatar").attr("src");
	$('.cropped ul li:first-child img').attr("src",img);
	$('.cropped ul li:nth-child(2) img').attr("src",img);
	$('.cropped ul li:last-child img').attr("src",img);
}
function adjust(el, selection) {
	var scaleX = $(el).width() / (selection.width || 1);
	var scaleY = $(el).height() / (selection.width || 1);
	$(el+' img').css({
		width: Math.round(scaleX*$('#avatar').width() ) + 'px',
		height: Math.round(scaleY*$('#avatar').height() ) + 'px',
		marginLeft: '-' + Math.round(scaleX * selection.x1) + 'px',
		marginTop: '-' + Math.round(scaleY * selection.y1) + 'px'
	});
}

function preview(img, selection) {
	adjust('#small_preview01', selection);
	adjust('#small_preview02', selection);
	adjust('#small_preview03', selection);
}

function selectInit(img, selection) {
	$('#id_top').val(selection.y1);
	$('#id_left').val(selection.x1);
	$('#id_right').val(selection.x2);
	$('#id_bottom').val(selection.y2);
	$('#id_width').val(selection.width);
	$('#id_height').val(selection.height);
	console.log($('#id_top').val());
	console.log($('#id_width').val());
}
















