import { useState } from "react";

export default function useVisible(initial){
    
    const [visible, setVisible] = useState(initial);

    return {
        visible,
        setVisible
    }

}