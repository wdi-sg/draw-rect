

// function drawRectangle(width, length, corner = "o", flat = "-", straight = "|", fill = " ") {
// 	let rectangle = [];
// 	for (let i = 0; i < length; i++ ) {
// 		let row =  [];
// 		for (let j = 0; j < width; j++ ) {
// 			if (
// 				(i === 0 && j === 0) || 
// 				(i === length-1 && j === width-1) || 
// 				(i === 0 && j === width-1) ||
// 				(i === length-1 && j === 0)
// 			) {
// 				row.push(corner);
// 			} else if (i===0 || i === length-1) {
// 				row.push(flat);
// 			} else if (j===0 || j === width-1) {
// 				row.push(straight);
// 			} else {
// 				row.push(fill);
// 			}
// 		}
// 		rectangle.push(row);
// 	}
// 	rectangle.forEach(row => console.log(row.join("")));;
// }


// function readRectangle(array) {
// 	console.log(array);
// }

function drawRectangle(width, length, corner = "o", flat = "-", straight = "|", fill = " ") {
	let rectangle = "";
	for (let i = 0; i < length; i++ ) {
		for (let j = 0; j <= width; j++ ) {
			let add = "";
			if (j === width) {
				add="\n";
			} else if (
				(i === 0 && j === 0) || 
				(i === length-1 && j === width-1) || 
				(i === 0 && j === width-1) ||
				(i === length-1 && j === 0)
			) {
				add = corner;
			} else if (i===0 || i === length-1) {
				add = flat;
			} else if (j===0 || j === width-1) {
				add = straight;
			} else {
				add = fill;
			}
			rectangle= rectangle + add;
		}
	}
	console.log(rectangle);
}

drawRectangle(80,20, "*", "~", "&", ".");