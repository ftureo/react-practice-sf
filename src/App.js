import { useState } from "react";
import html2canvas from "html2canvas";
import "./styles/styles.css"

function App() {

  const [text1, setText1] = useState('Texto Superior')
  const [text2, setText2] = useState('Texto Inferior')
  const [image, setImage] = useState("fry")
  
  console.log("Esto está en image", image)

  const onChangeInput1 = (event) => {
    setText1(event.target.value)
  }

  const onChangeInput2 = (event) => {
    setText2(event.target.value)
  }

  const onChangeImage = (event) => {
    setImage(event.target.value)
  }

  const exportMeme = () => {
    alert("Exportando")
    html2canvas(document.querySelector("#memeToExport"))
      .then(canvas => {
        let imageCreated = canvas.toDataURL('image/png')
        let link = document.createElement('a')
        link.download = "meme.png"
        link.href = imageCreated
        link.click()
      }
    )
  }
  return (
    <div>
      <select onChange={onChangeImage}>
        <option value='house'>Burning House</option>
        <option value='fry'>Fry</option>
        <option value='philosoraptor'>Philosoraptor</option>
      </select>

      <input type='text' placeholder="input1" onChange={onChangeInput1}/>
      <input type='text' placeholder="input2" onChange={onChangeInput2}/>
      <button onClick={exportMeme}>Export image</button>

      <div className="memeGenerated" id='memeToExport'>
        <h1>{text1}</h1>
        <h2>{text2}</h2>
        {/* <img src={"./images/"+ image + ".jpg"} alt=""/> */}
        <img src={`./images/${image}.jpg`} alt=""/>
      </div>
    </div>
  );
}

export default App;
