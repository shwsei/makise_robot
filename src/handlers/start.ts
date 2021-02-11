import {Composer} from 'telegraf'
import env from '../env'

export const start = Composer.command('start', ctx => {
  const {first_name} = ctx.message.from
  ctx.reply(
    `Olá ${first_name} , eu sou um bot feito para banir usuários que enviarem pornografia em seu grupo\n` +
    'Basta me adicionar em seu grupo como administrador para que eu possa lhe ajudar :)',
    {
      reply_markup: {
        inline_keyboard: [
          [{text: 'Criador', url: `https://t.me/${env.USERNAME}`}]
        ]
      }
    }
  )

})
