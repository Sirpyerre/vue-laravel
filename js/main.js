Vue.component('modal',{
	template: `
		<div class="modal is-active">
			<div class="modal-background"></div>
			
			<div class="modal-card">
				<header class="modal-card-head">
					<p class="modal-card-title">
						<slot name='title' ></slot>
					</p>
		 			<button class="modal-close is-large" @click="$emit('close')" aria-label="close"></button>
				</header>

				<section class="modal-card-body">
					<slot name='content'>Default Content</slot>
				</section>
				
				<footer class="modal-card-foot">
					<button class="button is-success">Save changes</button>
					<button class="button">Cancel</button>
				</footer>
			</div>


		</div>
	`,

});

// let app= new Vue({
// 	el: '#app',
// 	data: {
// 		showModal: false,
// 		title: ''
// 	}
// });

Vue.component('task', {
	'template' : '<li><slot></slot></li>'
});

new Vue({
	el:'#root',

});