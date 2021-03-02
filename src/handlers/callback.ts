import {Composer} from 'telegraf';

export const callback = Composer.on('callback_query', async ctx => {
  const getAdms = await ctx.getChatAdministrators()
  const isAdm = getAdms.find(msg => msg.user.id === ctx.from?.id)

  if (isAdm && 'data' in ctx.callbackQuery) {
    try {
      const { data } = ctx.callbackQuery
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

