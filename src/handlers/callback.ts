import {Composer} from 'telegraf';

export const callback = Composer.on('callback_query', async ctx => {
  const chatId = String(ctx.chat?.id) // ignore a gambiarra, é apenas para burlar a porra do "compilador"
  const isAdm = await ctx.tg.getChatAdministrators(chatId)
  const found = isAdm.find(msg => msg.user.id === ctx.from?.id)

  if (found) {
    try {
      await ctx.unbanChatMember(parseInt(ctx.callbackQuery.data))
      await ctx.editMessageText('Usuário desbanido')
      ctx.answerCbQuery('Usuário desbanido')
    } catch (err) {
      console.log(err)
      ctx.editMessageText('Ocorreu um erro ao desbanir o usuário')
    }
  } else {
    ctx.answerCbQuery('Você não tem permissão')
  }

})

