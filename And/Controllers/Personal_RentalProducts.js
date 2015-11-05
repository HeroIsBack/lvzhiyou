mui.init();
(function($mui) {
	//阻尼系数
	var deceleration = mui.os.ios ? 0.003 : 0.0009;
	$mui('.mui-scroll-wrapper').scroll({
		bounce: false,
		indicators: true, //是否显示滚动条
		deceleration: deceleration
	});
	$mui.ready(function() {
		//循环初始化所有下拉刷新，上拉加载。
		$mui('#divProductList').pullToRefresh({
			down: {
				callback: function() {
					pulldownRefresh(this);
				}
			},
			up: {
				callback: function() {
					pullupRefresh(this);
				}
			}
		});
	});
})(mui);
/**
 * 下拉刷新具体业务实现
 */
function pulldownRefresh(var_this) {
		setTimeout(function() {
			var $table = $('.mui-table-view');
			var $cell = $('.mui-table-view-cell:eq(0)');
			$table.append($cell.clone());
			var_this.endPullDownToRefresh(); //refresh completed
		}, 000);
	}
	/**
	 * 上拉加载具体业务实现
	 */

function pullupRefresh(var_this) {
	setTimeout(function() {
		var $table = $('.mui-table-view');
		var $cell = $('.mui-table-view-cell:eq(0)');
		$table.append($cell.clone());
		var_this.endPullDownToRefresh(); //refresh completed
	}, 000);
}