import LockScreenComponent from "./LockScreen.vue";
import { createApp, watch } from "vue";
const LockScreen = options => {
	//createApp初始化一个独立的应用上下文，并返回一个应用实例对象，相当于vue2的new Vue()
	const LockScreenApp = createApp(LockScreenComponent, options);
	showLockScreen(LockScreenApp);
};
const showLockScreen = app => {
	//创建文档片段
	const oFragment = document.createDocumentFragment();
	//挂载组件到文档片段上，vm是组件实例，有子组件暴露的方案
	const vm = app.mount(oFragment);
	//将文档片段插入到body中
	document.body.appendChild(oFragment);
	vm.setVisible(true);
	watch(vm.state, state => {
		if (!state.visible) {
			hideMessageBox(app);
		}
	});
};
const hideMessageBox = app => {
	app.unmount();
};
export default LockScreen;
