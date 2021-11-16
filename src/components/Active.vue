<template>
	<div>
		<div 
			v-if="checkList.length != 0"
			class="container mt-5">
			<div class="row">
				<h2 class="text-center">My Active Tasks</h2>
			</div>
			
			<own-list :checkList="checkList"></own-list>

		</div>
		<div v-else class="text-center">No one is Active, for create press { ENTER } button</div>
	</div>
</template>

<script>
export default {
	computed: {
		checkList () {
			return this.$store.getters.checkListActive
		}
	}
}
</script>