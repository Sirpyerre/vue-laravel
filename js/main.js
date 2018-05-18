Vue.component('modal',{
	template: `
		<div class="modal is-active">
		  <div class="modal-background"></div>
		  <div class="modal-content">
		  	<div class="box">
		  		 <slot name='title' >  </slot>
		  	</div>
		  </div>
		  <button class="modal-close is-large" @click="$emit('close')" aria-label="close"></button>
		</div>
	`,

});

let app= new Vue({
	el: '#app',
	data: {
		showModal: false
	}
});


app.content = 'Peter'
app.showModal = true;

		// <div class="modal">
		//   	<div class="modal-background"></div>
		//   	<div class="modal-card">
		//     	<header class="modal-card-head">
		//       		<p class="modal-card-title">
		// 				<slot name='title' ></slot>
		//       		</p>
		//       		<button class="delete" aria-label="close" @click="showModal =  false" ></button>
		//     	</header>
		//     	<section class="modal-card-body">
		//       		<slot name='content'>Default Content</slot>
		//     	</section>
		// 	    <footer class="modal-card-foot">
		// 	    	<button class="button is-success">Save changes</button>
		// 	      	<button class="button">Cancel</button>
		// 	    </footer>
		//   </div>
		// </div>