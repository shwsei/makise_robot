import {bot} from './bot'
import {initHandler} from './handlers/index'

(async () => {

  initHandler()
  bot.catch(err => console.log('erro no polling', err))
  await bot.launch()

  console.log(`@${bot.botInfo?.username} está sendo executado!`);

})()
