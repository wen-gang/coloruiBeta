<template>
	<ui-navbar :back="true" :bg="navBg">
		<block slot="center">{{ title }}</block>
	</ui-navbar>
</template>

<script>
export default {
	name: 'appNavbar',
	data() {
		return {};
	},
	props: {
		navBg: {
			type: String,
			default: 'bg-blur'
		},
		title: {
			type: String,
			default: ''
		}
	},
	methods: {}
};
</script>

<style></style>
