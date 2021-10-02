exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Você deve estar em um canal de voz para utlizar esse comando!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue){ return message.channel.send({
        embed: {
            description: 'Nada está tocando no momento para eu poder parar!',
            color: 'RED'
        }
    })
}

    if(queue.songs.length !== 0) {
        queue.voiceChannel.leave();
        queue.connection.dispatcher = null;
        message.client.queue.clear();
        return message.channel.send({
            embed: {
                description: 'Parei de tocar :(',
                color: 'RED'
            }
        })    
    }
}