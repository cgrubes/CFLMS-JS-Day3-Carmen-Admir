function areaVolume(width, height, depth) {
	let area = width * height;
	let volume = width * height * depth;
   	return [area, volume]; 	
}

document.write("<b>The area of the box is: ", areaVolume(7, 2, 5)[0], "</b><br>");
document.write("<b>The volume of the box is: ", areaVolume(7, 2, 5)[1], "</b>");
    