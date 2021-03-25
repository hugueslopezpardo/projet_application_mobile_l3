export default function()
{

    return{

        todos_lists     : [],    //Liste contenant toute les listes de TODO
        current_list    : null,  //La liste sur la quel nous sommes entrain de travailler
        current_todos    : null,  //La TODO sur la quel nous travaillons

        success_message : null,  //Le message a afficher en cas de success
        error_message   : null,  //Le message a afficher en cas d'erreur

        is_data_loading : false  //Permet de savoir si nous devons afficher l'écran de chargement

    }

}