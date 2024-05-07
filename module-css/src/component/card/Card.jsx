import React from 'react'
import "./Card.css";
import data from '../../data'
// maplerde 1.parmetre değer 2.parametre sıra numarası 3. parametre dizinin kendisi
// arrowfunction süslü parantez kullanmazsan otomatik returning özelliği vardır
//bir  jsx çerçevesi içine js kodu yazmak istersen süslü parantez içine alaman gerekir aşağıdaki {data.map()} örneğinde olduğuu gibi
// arrowfunction kullanırken süslü açtığın gibi return yaz sonra unutma
// data map dedikten sonra arrowfunction içinde yine istediğin şeyi diyebilirsin ben data dedim çünkü datanın id'si datanın img'i datanın btnNami gibi
console.log(data)

export const Card = () => {
return(

  <div>
  {data.map(({id,img,language,btnName})=>(
    <div key={id}>
      <h2>{language}</h2>
      <img src={img} alt="img" />
      <button>{btnName}</button>
    </div>
  ))}
</div>





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
)
}
