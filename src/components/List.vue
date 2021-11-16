<template>
	<div class="row">
		<div 
			v-for="task in checkList"
			:class="{'bg-success': task.isCompleted}"
			@click="changeStatus(task)"

			class="card mb-3 mx-auto" 
			style="max-width: 840px;">
	  		<div 
	  			class="row g-0">
				<div class="col-md-12">
					<div class="card-body">
						<h3 class="card-title">{{ task.task }}</h3>
					</div>
				</div>
			</div>
		</div>
		<div class="text-center">There are { {{ checkList.length }} } tasks </div>
	</div>
</template>

<script>
export default {
	props: ['checkList'],
	methods: {
		changeStatus (payload) {
			payload.isCompleted = !payload.isCompleted
			this.$store.commit('setLocalStorage', this.$store.getters.checkList)
		}
	}
}
</script>