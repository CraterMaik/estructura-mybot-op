module.exports = (client, message) => { 
	if (!message.content.startsWith(client.config.prefix)) return;

	const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g); 
	const command = args.shift().toLowerCase() 

	let cmd = client.comandos.get(command);
	if (!cmd) return; 

	cmd(client, message, args);
	
}