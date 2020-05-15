export default {
	data() {
		return {
			searchVal: "",
			selectType: "",
			selectList: [],
			hotWordsList: [],
			isShow: false,
			// 当前页数
			nowPage: 1,
			// 当前页条数
			nowSize: 10,
			// 总条数
			totalElements: 0,
			url: "",
			buttonOptions: [{
			  type: "primary",
			  icons: 'el-icon-plus',
			  title: "添加热词",
			  method: "showAddBox"
			}, {
				type: "danger",
				icons: "el-icon-delete",
				title: "批量删除热词",
				method: "deleteAllHotWords"
			}]
		}
	}
}