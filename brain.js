function update(p, l, fp) {
	return p*l/(p*l + ((1-p)*fp)) 
}

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
	el: "#main-wrapper",
	data: {
		prior: undefined,
		likely: undefined,
		false_pos: undefined,
		result: undefined
	}
});

vm.$watch("prior", function(value, old) {
	vm.result = update(value, vm.likely, vm.false_pos)
	check_input()
	})
vm.$watch("likely", function(value, old) {
	vm.result = update(vm.prior, value, vm.false_pos)
	check_input()
	})
vm.$watch("false_pos", function(value, old) {
	vm.result = update(vm.prior, vm.likely, value)
	check_input()
	})