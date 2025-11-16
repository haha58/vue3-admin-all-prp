<template>
	<div style="border: 1px solid #ccc; z-index: 99999">
		<!-- 工具栏 -->
		<Toolbar :editor="editorRef" :defaultConfig="toolbarConfig" style="border-bottom: 1px solid #ccc" :mode="mode" />
		<!-- 编辑器 -->
		<Editor
			:defaultConfig="editorConfig"
			v-model="defaultHtml"
			@on-change="handleChange"
			style="height: 500px; overflow-y: hidden"
			:mode="mode"
			@on-created="handleCreated"
		/>
	</div>
</template>

<script setup>
import { onBeforeUnmount, shallowRef, reactive, toRefs } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";

// 接收父组件的 v-model 值
const props = defineProps({
	modelValue: {
		type: [String],
		default: ""
	}
});

//接收父组件，声明可触发的事件
const emit = defineEmits(["update:modelValue"]);

// 编辑器实例，必须用 shallowRef
//如果用ref会对绑定的值进行深度响应式转换（递归将对象的所有属性变成响应式）。
//但对编辑器实例，通常是复杂的第三方对象，包括大量内部属性和方法，会导致性能开销和潜在问题
const editorRef = shallowRef();

//ref包裹对象时，对象.value是一个通过reactive转换的响应式对象
//ref包裹不管是对象还是基本类型，都要通过.value来访问或修改
//但是reactive可以直接访问。则ref可以通过ref.value重新赋值，但是reactive不支持
const state = reactive({
	toolbarConfig: {},
	editorConfig: {
		placeholder: "请输入内容...",
		MENU_CONF: {
			uploadImage: {
				// 自定义图片上传
			}
		}
	},
	defaultHtml: props.modelValue,
	mode: "default"
});

const { toolbarConfig, editorConfig, defaultHtml, mode } = toRefs(state);

const handleCreated = editor => {
	editorRef.value = editor; // 记录 editor 实例，重要！
};

function handleChange(editor) {
	emit("update:modelValue", editor.getHtml());
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
	const editor = editorRef.value;
	if (editor == null) return;
	editor.destroy();
});
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>
