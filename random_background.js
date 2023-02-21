$(document).ready(function () {
	const colors = [
		"EA6123",
		"CB4603",
		"AB2A01",
		"8C0300",
		"6D0200",
		"4F0100",
		"350002",
		"010000",
		"000000",
		"ea0c0c",
		"940194",
		"3fab43",
	];

	const randomColor = () => {
        let random = Math.floor(Math.random() * colors.length);
		let colorRandom = "#" + colors[random];
        return colorRandom;
    };

	$("button").on("click", function () {
		$("body").css("background-color", randomColor());
	});
});
