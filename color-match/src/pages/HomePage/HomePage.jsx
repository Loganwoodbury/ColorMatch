import ColorPaletteComponent from "../../components/ColorPalette/ColorPaletteComponent"
import { useEffect, useState } from "react"


export default function HomePage(){

    const [color, setColor] = useState('');

    useEffect(() => {
        
    }, [color]);
    
    return (
        <>
            <h1>Select Your Color</h1>
            <ColorPaletteComponent onColorChange={setColor}/>
            <div style={{width:"100px", height:"100px", backgroundColor:color.hex, margin:"20px auto"}}></div>
        </>
    )
}