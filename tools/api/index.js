import { Router } from 'express'
const router = Router();

import summoners from './summoners'

router.use('/summoners', summoners)

export default router
