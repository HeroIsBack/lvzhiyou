mui.init();
(function($mui) {
	$mui.init({
		swipeBack: false,
		statusBarBackground: '#f7f7f7',
		gestureConfig: {
			doubletap: true
		},
		subpages: [{
			id: 'list',
			url: 'ProductsList.html',
			styles: {
				top: '70px',
				bottom: 0,
				bounce: 'vertical'
			}
		}]
	});
})(mui);