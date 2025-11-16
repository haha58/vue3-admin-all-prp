<template>
	<div>
		<el-row :gutter="20">
			<el-col :xs="24" :sm="24" :md="24" :lg="16">
				<WangEditor v-model="htmlValue" />
			</el-col>
			<el-col :xs="24" :sm="24" :md="24" :lg="8">
				<div class="rictext-box">
					<div class="rictext-box-item" v-html="htmlValue"></div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<!-- <input v-model="htmlValue"/>，表单输入中，实现数据双向绑定，相当于:value='htmlValue' @input="htmlValue=$event.target.value" -->
<!-- <WangEditor v-model="htmlValue"/>，自定义组件中，相当于:modelValue='htmlValue' update:modelValue="htmlValue"，
	因此子组件接收为modelValue和update:modelValue'，
	modelValue则是因为vue3同意用modelValue为默认名称
-->
<!-- 自定义v-model的props,v-model:title="parentTitle",则接收为title（自定义props名）和update:title（触发自定义事件） -->
<script setup name="wangEditor">
import { ref } from "vue";
import WangEditor from "@/components/WangEditor/index.vue";
const htmlValue = ref("");
</script>
<style lang="less" scoped>
:deep(p) {
	margin: 0;
}
.rictext-box {
	position: relative;
	width: 430px;
	height: 900px;
	background-image: url("@/assets/images/iphone.png");
	background-size: 100% 100%;
	transform: scale(0.7);
	margin: 0 auto;
	margin-top: -130px;
	.rictext-box-item {
		position: absolute;
		box-sizing: border-box;
		top: 109px;
		left: 27px;
		width: 375px;
		height: 678px;
		overflow-y: auto;
		background: #fff;
		overflow-x: hidden;
		padding: 16px;
	}
}
</style>
