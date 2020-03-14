const mm = require('music-metadata');
 

function printData(fileName) {
	// body...
	mm.parseFile(fileName)
	  .then( metadata => {
	    const initPath= "/Users/vijaykiran225/sample/";

	    console.log(initPath+metadata.common.album+"/"+metadata.common.title+"."+fileName.split('.').pop());
	  })
	  .catch( err => {
	    console.error(err.message);
	  });
}

printData('./Kanne-Kanne-MassTamilan.org.mp3');
printData("./Austin.wav")
printData("./Burn inside My Light.wma")
printData("./01 Remember Me (Ernesto de la Cruz).m4a")
