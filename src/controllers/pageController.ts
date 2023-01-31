import {Request,Response} from 'express'



export const inicio = (req:Request, res:Response) =>{
    res.render('pages/inicio',{

    })
}

export const alcoolismo = (req:Request, res:Response) =>{
    res.render('pages/alcoolismo',{

    })
}

export const dependencia = (req:Request, res:Response) =>{
    res.render('pages/dependencia',{

    })
}

export const feedback = (req:Request, res:Response) =>{
    res.render('pages/feedback',{

    })
}

export const involuntario = (req:Request, res:Response) =>{
    res.render('pages/involuntario',{

    })
}

export const mulheres = (req:Request, res:Response) =>{
    res.render('pages/mulheres',{

    })
}

export const termos = (req:Request, res:Response) =>{
    res.render('pages/termos',{

    })
}

export const voluntario = (req:Request, res:Response) =>{
    res.render('pages/voluntario',{

    })
}

export const ongs = (req:Request, res:Response) =>{
    res.render('pages/ongs',{
        
    })
}