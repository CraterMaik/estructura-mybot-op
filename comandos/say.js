module.exports = (client, message, args) => {
	let texto = args.join(" ");
	if (!texto) message.channel.send('Debe escribir un mensaje.');

	message.channel.send(texto);

}