import {bot} from '../bot'
import {callback} from './callback'
import {mainHandler} from './main'
import {start} from './start'

export const initHandler = (): void => {
  bot.use(mainHandler)
  bot.use(callback)
  bot.use(start)
}
