function check_input() {
	let inputs = document.getElementsByClassName("probability")
	for (i = 0; i < inputs.length; i++) {
		if (inputs[i].validity.valid == false) {
			inputs[i].nextElementSibling.style.visibility = "visible"
		} else {
			inputs[i].nextElementSibling.style.visibility = "hidden"
		}
	}
}

var vm = new Vue({
	el: "#root",
	data: {
		prior: null,
		likely: null,
		false_pos: null,
	},
	computed: {
		result: function () {
			if (this.prior && this.likely && this.false_pos) {
				return this.prior*this.likely / ( this.prior*this.likely + ((1-this.prior)*this.false_pos) )
			} else {
				return null
			}
		}
	}
});