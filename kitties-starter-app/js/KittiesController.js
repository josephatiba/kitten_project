angular
	.module('KittenApp')
	.controller('KittenController', KittenController);

	function KittenController () {
	
	
		this.addKitten = addKitten;
		this.test = "this is a test.";

		this.kittenList = [
				{
					catName: 'Karl',
					monthsOld: 5,
					gender: 'boy',
					image: "images/carl.png",
					adopted: true,
				},
				{
					catName: 'Jack',
					monthsOld: 4,
					gender: 'boy',
					image: "images/jack.png",
					adopted: false
				},
				{
					catName: 'Oscar',
					monthsOld: 2,
					gender: 'boy',
					image: "images/oscar.png",
					adopted: false
				},
				{
					catName: 'Princess Mew',
					monthsOld: 3,
					gender: 'girl',
					image: "images/princessmew.png",
					adopted: false
				}

			];

			this.adoptList = [];

			function addKitten() {
				this.adoptList.push({catName: this.catName, monthsOld: this.monthsOld, gender: this.gender, image: this.image, adopted: true});
			}

}