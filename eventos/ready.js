module.exports = (client) => { // Function for when client has logged in.

	client.user.setPresence( 
		{
			status: "online",
			game: { 
				name: '!ping pong',
				url: null,
				type: "PLAYING" 
			}
		}
	);

}