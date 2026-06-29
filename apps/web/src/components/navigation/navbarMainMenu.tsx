import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs";
import mainMenu from "../../../public/data/navigation/mainmenu.json"

const NavbarMainMenu = () =>{

    return(
   <Tabs defaultValue="All">
      <TabsList variant="line">
        {mainMenu.map(menu =>(

        <TabsTrigger className="text-[#222222] " key={menu.id} value={menu.title}><img className="w-[70px]" src={menu.media} alt="" /> {menu.title}</TabsTrigger>
        ))}
   

      </TabsList>
      </Tabs>

    
)}

export default NavbarMainMenu;