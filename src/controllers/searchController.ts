import {Request, Response} from 'express'

import { Page } from '../models/page'



export const search = (req:Request, res:Response) =>{

    let query: string = req.query.q as string

    let list = Page.getFromName(query)
    
    res.render('pages/pages',{
        menu:(''),
        list,
        query
    })
}