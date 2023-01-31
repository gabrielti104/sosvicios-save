import { Router } from "express";
import {  Request, Response } from "express";
import * as pageController from '../controllers/pageController'


const router = Router()

router.get('/',pageController.inicio)

router.get('/alcoolismo', pageController.alcoolismo)

router.get('/dependencia', pageController.dependencia)

router.get('/feedback', pageController.feedback)

router.get('/involuntario', pageController.involuntario)

router.get('/mulheres', pageController.mulheres)

router.get('/termos', pageController.termos)

router.get('/voluntario', pageController.voluntario)

router.get('/ongs', pageController.ongs)


export default router