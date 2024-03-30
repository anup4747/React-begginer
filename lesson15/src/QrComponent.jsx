import { useState } from "react"
import QRCode from "react-qr-code"


export default function QrCodeGenerator(){


    const [Qrcode, setQrcode] = useState('')
    const [input,setInput] = useState('')

    function handleQrcodeInput (){
        setQrcode(input);

    }

    return(
        <div className="container">
            <h1>QR Code Generator</h1>
            <div className="Input-section">
                <input onChange={(e)=> setInput(e.target.value)} type="text" name="qr-code" id="Enter the value " />
                <button disabled ={input && input.trim() !== "" ? false : true} onClick={handleQrcodeInput}>Submit</button>
                
            </div>
            <div className="Qrcode">
            <QRCode id="qr-code-value" value={Qrcode} size={400}/>
                </div>

        </div>


    )
}