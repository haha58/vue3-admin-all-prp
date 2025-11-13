<template>
	<div style="height: 100%" v-waterMarker="waterMarker"></div>
</template>
<script setup name="watermark">
import { reactive } from "vue";
const waterMarker = reactive({
	text: "闻言聊前端",
	textColor: "rgba(0,0,0,0.6)"
});
</script>
