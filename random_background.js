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
        "EE5C1C",
        "F69503",
        "831CDB",
        "7FDA1F",
        "E66C2C",
        "132504",
        "1f3613",
        "ce5f15",
        "704020",
        "682702",
        "59320a",
        "994900",
        "c45400",
        "d17200"
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
