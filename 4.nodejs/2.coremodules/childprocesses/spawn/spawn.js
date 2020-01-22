var spawn = require('child_process').spawn;

cp = spawn('node',['saying']);

cp.stdout.on("data", function(data) {
	console.log(`STDOUT: ${data.toString()}`);
});

cp.on("close", function() {

	console.log("Child Process has ended");

	process.exit();

});


setTimeout(function() {

	cp.stdin.write("stop");

}, 4000);

