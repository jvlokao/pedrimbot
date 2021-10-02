exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    return message.channel.send({
        embed: {
            description: 'Comandos: *play (Toca musica do Youtube), *playlist (Toca playlist do Youtube), *loop (Coloca a musica ou a queue atual em loop, *stop (Para de tocar e cancela a queue), *queue (Mostra a queue de musicas), *skip (Pula para a próxima musica))',
            color: 'RED'
        }
    })    
}
