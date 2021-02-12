import {bot} from './bot'
import {initHandler} from './handlers/index'

(async () => {

  initHandler()
  bot.catch(() => console.log('Ocorreu um erro no polling!'))
  await bot.launch()

  console.log(`@${bot.botInfo?.username} está sendo executado!`);

})()
