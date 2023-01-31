type PageType = 'Page'

type Page = {
    name: string
}
const data: Page[] = [
    {
        name: 'alcoolismo'
    },
    {
        name: 'dependencia',
    },
    {
        name: 'feedback',
    },
    {
        name: 'involuntario',
    },
    {
        name: 'mulheres',
    },
    {
        name: 'termos',
    },
    {
        name: 'voluntario',
    }
]

// /*1 - retornar todos os PETS 

export const Page = {


    getFromName: (name: string): Page[] =>{
        return data.filter(item =>{
            if(item.name.toLowerCase().indexOf(name.toLocaleLowerCase()) > -1){
                return true
            }else{
                return false
            }
        })
    }

}