  // import "./Card.css"
import React from "react"
import data from "../../data"
import CardStyle from "./Card.module.css"
import Buton from "../button/Buton"


//* module.css'de derleyici CSS class'larini alarak bunlari unique olacak
//* sekilde yeniden adlandirir. (Ornek: card_title__XaSde)
//* Bu durumda, global scope problemi ortadan kalktigi icin stillerin
//* baska class tarafindan ezilmesi (overriding) engellenir.
//* Module-CSS, Webpack, Browsify gibi tool'lar ile kullanilabilir.

const Card = () => {
  console.log("burada sorun yok")
  console.log(data)
  return (
    <div>
        {data.map(({ id, language, img, btnName }) => (
        <div key={id}>
          <h1 className={CardStyle.title}>{language}</h1>
          <img src={img} alt="img" />
          <Buton name={btnName}></Buton>
        </div>
      ))}

      {/* <h1>{data[0].language}</h1>
      <img src={data[0].img} alt="" />
      <Buton name={data[0].btnName} />

      <h1>{data[1].language}</h1>
      <img src={data[1].img} alt="" />
      <Buton name={data[1].btnName} />

      <h1>{data[2].language}</h1>
      <img src={data[2].img} alt="" />
      <Buton name={data[2].btnName} /> */}
    </div>
  )
}

export default Card


// maplerde 1.parmetre değer 2.parametre sıra numarası 3. parametre dizinin kendisi
// arrowfunction süslü parantez kullanmazsan otomatik returning özelliği vardır
//bir  jsx çerçevesi içine js kodu yazmak istersen süslü parantez içine alaman gerekir aşağıdaki {data.map()} örneğinde olduğuu gibi
// arrowfunction kullanırken süslü açtığın gibi return yaz sonra unutma
// data map dedikten sonra arrowfunction içinde yine istediğin şeyi diyebilirsin ben data dedim çünkü datanın id'si datanın img'i datanın btnNami gibi





//BU AŞAĞDAKİ DE OLUR VE YUKARIDA AÇIKLADIM 

  // <div>
  //   {data.map((data)=>(
  //     <div>
  //       <h1>{data.id}</h1>
  //       <h2>{data.language}</h2>
  //       <img src={data.img} alt="" />
  //       <button>{data.btnName}</button>
  //     </div>
  //   ))}
  // </div>

