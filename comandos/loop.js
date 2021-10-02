//pause

exports.run = async(client, message, args) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('**Você deve estar em um canal de voz para utlizar esse comando!**');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed: {
            description: '**A música agora está pausada!**'
        }
    })
    queue = message.client.queue.get(message.guild.id);

    switch(args.join(' ').toLowerCase()){
        case "queue":
            queue.loopall = !queue.loopall;
            queue.loopone = false;

            if(queue.loopall === true){
                message.channel.send({
                    embed: {
                        description: '**Queue em Loop**',
                        color: 'RED'
                    }
                })
                    
            }else{
                message.channel.send({
                    embed: {
                        description: '**Loop da Queue cancelado**',
                        color: 'RED'
                    }
                })
            }
            break;
        case "song":
            queue.loopone = !queue.loopone;
            queue.loopall = false;

            if(queue.loopone === true){
                message.channel.send({
                    embed: {
                        description: '**Musica em Loop**',
                        color: 'RED'
                    }
                })
            }else{
                message.channel.send({
                    embed: {
                        description: '**Loop da musica cancelado**',
                        color: 'RED'
                    }
                })
            }
            break;
        case "off":
            queue.loopone = false;
            queue.loopall = false;
            message.channel.send({
                embed: {
                    description: '**Loop cancelado**',
                    color: 'RED'
                }
            })
            break;
        default: 
            message.channel.send({
                embed: {
                    description: '**Especifique o tipo de loop. *loop <queue/song/off>**',
                    color: 'RED'
                }
            })           
    }



}