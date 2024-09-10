import { useEffect } from "react";

export const useTitle = (title) => {
    
    useEffect(() => {
        document.title = `${title} Paw Palace`;
    }, [title]);

  return null;
}
