import {Composer} from 'telegraf'
import downloadImg from '../utils/downlaodImg'
import {execNSFW} from '../utils/exec'
import Verify from '../utils/verify'

export const mainHandler = Composer.on(['animation', 'video', 'photo', 'sticker'], async ctx => {
  const chatId = ctx.message.chat.id
  const userId = ctx.from?.id

  if (ctx.chat?.type === 'private') return ctx.reply(
    "Sou um bot que é funcional apenas em grupos!",
    {parse_mode: 'MarkdownV2'})

  const isAdm = await ctx.tg.getChatAdministrators(chatId)
  const found = isAdm.find(msg => msg.user.id === userId)

  if (!found) {
    const type = Verify(ctx.message)
    const downFile = await ctx.tg.getFileLink(type)

    const file = await downloadImg(downFile.href, String(Date.now()))
    const verifyImg = execNSFW(file)

    if (verifyImg) {
      try {
        await ctx.deleteMessage()
        await ctx.tg.kickChatMember(chatId, ctx.message.from.id)

        ctx.reply(
          `💬 Usuário de ID: [${userId}](tg://user?id=${userId}) foi banido por enviar conteúdo NSFW`,
          {
            parse_mode: 'Markdown',
            reply_markup: {
              inline_keyboard: [
                [{text: 'Desbanir', callback_data: `${userId}`}]
              ]
            }
          })
      } catch (err) {
        ctx.reply('*Não consegui banir o usuário!*', {parse_mode: 'Markdown'})
      }
    } else {
      console.log('Imagem passou:', verifyImg)
    }

  }

})
