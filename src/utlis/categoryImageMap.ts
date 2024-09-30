const categoryImages: { [key: string]: string } = {
    wildfires: "https://res.cloudinary.com/dvukj9sqf/image/upload/v1727650024/fire_utgqtw.png",
    dusthaze: "https://res.cloudinary.com/dvukj9sqf/image/upload/v1727647335/xQw_LuFB_k5lnv6.png",
    Drought: "https://res.cloudinary.com/dvukj9sqf/image/upload/v1727679741/Le28zLwm_ws0tki.png",
    


   

   
  };
  
  export const getImageForCategory = (category: string) => {
    return categoryImages[category] || "https://res.cloudinary.com/dvukj9sqf/image/upload/v1727647335/xQw_LuFB_k5lnv6.png" ;
  };
  