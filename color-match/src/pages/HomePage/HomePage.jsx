import ColorPaletteComponent from "../../components/ColorPalette/ColorPaletteComponent"
import { use, useEffect, useState } from "react"
import ColorService from "../../services/ColorService";
import styles from './HomePage.module.css'


export default function HomePage(){

    const [color, setColor] = useState('#121212');
    const [colorInfo, setColorInfo] = useState(null);
    const [isTriadClicked, setIsTriadClicked] = useState(false);
    const [colorOne, setColorOne] = useState('#121212');
    const [colorTwo, setColorTwo] = useState('#121212');
    const [colorThree, setColorThree] = useState('#121212');

    // useEffect(() => {

    //     console.log(color.hex);
        
    // }, [color]);

    useEffect(() => {
        getColorInfo(color.hex);
    }, [color]);


    function getColorInfo(hexcode){
        if(!hexcode) return;
        hexcode = color.hex.replace('#','');
        ColorService.colorLoookupByHex(hexcode)
        .then((res) => {
            setColorInfo(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    function handleTriadClick(){
        ColorService.getTriadScheme(colorInfo.hex.clean)
        .then((res) => {
            console.log(res.data);
            setColorInfo(res.data);
            setColorOne(res.data.colors[0].hex.value);
            setColorTwo(res.data.colors[1].hex.value);
            setColorThree(res.data.colors[2].hex.value);
            console.log(colorOne, colorTwo, colorThree);
            setIsTriadClicked(true);

        })
        .catch((err) => {
            console.log(err);
        })
        
        
    }


    return (
        <>
            <h1>Select Your Color</h1>
            <ColorPaletteComponent onColorChange={setColor}/>
            <div style={{width:"100px", height:"100px", backgroundColor:color.hex, margin:"20px auto"}}></div>
            <button onClick={handleTriadClick}>Triad</button>

            {isTriadClicked && colorInfo && (
                <div className={styles.triadColors}>
                    <div id={styles.colorOne} style={{backgroundColor:colorOne}}>
                        <p>HexCode: {colorOne}</p>
                    </div>
                    <div id={styles.colorTwo} style={{backgroundColor:colorTwo}}>
                        <p>HexCode: {colorTwo}</p>
                    </div>
                    <div id={styles.colorThree} style={{backgroundColor:colorThree}}>
                        <p>HexCode: {colorThree}</p>
                    </div>
                </div>
            )}
        </>
    )
}