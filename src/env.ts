import {cleanEnv, str} from 'envalid'
import dotenv from 'dotenv'

dotenv.config()

export default cleanEnv(process.env, {
  TG_TOKEN: str(),
  USERNAME: str(),
})
