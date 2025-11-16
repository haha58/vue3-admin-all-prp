<template>
	<div>
		<el-input v-model="copy" placeholder="Please input" class="input-with-select" style="width: 400px">
			<!-- #append 具名插槽，用于指定内容插在组件的append插槽位置 -->
			<template #append>
				<el-button v-copy="copy">复制</el-button>
			</template>
		</el-input>
	</div>
</template>
<script setup name="copy">
import { ref } from "vue";
const copy = ref("我是复制内容");
</script>
