
import { useEffect } from "react";
import { ColorPicker, Saturation, Hue, useColor, Alpha } from "react-color-palette";
import "react-color-palette/css";


export default function ColorPaletteComponent({onColorChange}){

    const [color, setColor] = useColor("hex", "#121212");

    

    useEffect(() => {
    }, [color]);


    onColorChange(color);
    return (
        <>
            
            <div style={{width:"500px", margin:"0 auto"}}>
                <ColorPicker width={456} height={228} color={color} onChange={setColor} hideHSV dark />
            </div>  
        </>
    )
}