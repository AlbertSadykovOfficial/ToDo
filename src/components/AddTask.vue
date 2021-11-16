<template>
	<div class="inline-block">
      <div v-if="modal"
          class="modal" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="false" style="display: flow-root !important;">
        <div class="modal-dialog">
          <div class="modal-content">

            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">New Task</h5>
            </div>
           	<div class="modal-body">
		    			<div class="form-group">
								<label for="name">Write Task</label>
								<input type="text" id="name" class="form-control" v-model.lazy="task">
							</div>
            </div>
            <div class="modal-footer">
              <button
                type="button" 
                class="btn btn-light"
                @click="onCancel()"
                >Close</button>
              <button
                type="button" 
                class="btn btn-success"
                @click="onSave()"
                >Add Task
              </button>
            </div>

          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
	data () {
		return {
			task: ''
		}
	},
	computed : {
		modal () {
			return this.$store.getters.modal
		}
	},
	methods: {
		onCancel () {
			this.task = ''
			this.$store.commit('setModal', false)
		},
		onSave () {
			if (this.name != '') {
				this.$store.commit('createTask', {
					task: this.task,
					isCompleted: false
				})
			}
			this.task = ''
			this.$store.commit('setModal', false)
			this.$store.commit('setLocalStorage', this.$store.getters.checkList)
		}
	}
}
</script>

<style scoped>
	.inline-block{
		display: inline-block
	}
</style>