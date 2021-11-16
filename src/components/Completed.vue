<template>
	<div>
		<div 
			v-if="checkList.length != 0"
			class="container mt-5">
			<div class="row">
				<h2 class="text-center">My Completed Tasks</h2>
			</div>
			
			<own-list :checkList="checkList"></own-list>
			
		</div>
		<div v-else class="text-center">No one is Complete</div>
	</div>
</template>

<script>
export default {
	computed: {
		checkList () {
			return this.$store.getters.checkListCompeted
		}
	}
}
</script>