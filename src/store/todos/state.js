export default function()
{
    return{

        todos_lists     : [],  //Liste contenant toute les listes de TODO
        current_list    : [],  //La liste sur la quel nous sommes entrain de travailler
        current_todo    : [],  //La TODO sur la quel nous travaillons

        success_message : [], //Le message a afficher en cas de success
        error_message   : [] //Le message a afficher en cas d'erreur

    }
}