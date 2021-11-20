<script>
		$(document).ready(function() {
			$('#bo_cate .sly-wrap').sly({
				horizontal: 1,
				itemNav: 'basic',
				smart: 1,
				mouseDragging: 1,
				touchDragging: 1,
				releaseSwing: 1,
				startAt: 0,
				speed: 300,
				prevPage: '#bo_cate .ca-prev',
				nextPage: '#bo_cate .ca-next'
			});

			// Sly Tab
			var cate_id = 'bo_cate';
			var cate_size = na_sly_size(cate_id);

			na_sly(cate_id, cate_size);

			$(window).resize(function(e) {
				na_sly(cate_id, cate_size);
			});
		});
	</script>