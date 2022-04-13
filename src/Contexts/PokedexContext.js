import  {createContext} from "react";

const Pokedex_Context = createContext({next_page:'', previous_page:'', page_url:'', url_data:'',url_results:'', setlist:''});

export default Pokedex_Context;