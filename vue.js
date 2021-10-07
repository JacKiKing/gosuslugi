new Vue ({
	el: '#containerTable',
	data: {
		name: names,
		flagName: false,
		flagSurname: false,
		buttonValue: "Показать таблицу",
		count: 5,
	},
	methods: {
		ShowHeadTable() {
			document.getElementById('tab').style.display = "table-row";
			this.buttonValue = "загрузить еще 5 строк";
		},
		ShowTable() {
			let arr = document.getElementsByClassName('line');
			for(let i = 0; i < this.count; i++){
				arr[i].style.display = "table-row";
			}
			if(this.count == arr.length){
				document.getElementById('showTab').style.display = "none";
			}
			return this.count += 5;
		},
		revName (){
			let majorName = this.name.sort((a, b) => b - a);
			let revName = this.name.reverse();
			if(flagName == true){
				name = majorName;
				return name
			}
			else{
				name = revName;
				return name
			}
		},
		
		revSurname (){
			let majorName = this.name.sort((a, b) => b - a);
			let revName = this.name.reverse();
			if(flagSurname == true){
				name = majorName;
				return name
			}
			else{
				name = revName;
				return name
			}
		},
		// sorting (){
		// 	this.name.sort();
		// 	return name;
		// }
	}
	// template: '<div><div class="borderLine" v-for="elem in name">{{elem.ID}}<div class="borderLineRight"></div>{{ elem.Name }}</div><div v-for="elem in name"></div><br/></div>',
});

