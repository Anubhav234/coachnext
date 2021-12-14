import Head from 'next/head';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
export default function Home({data}) {
  return (
    <div>
    <Head>
      <title>New Arrivals | COACH</title>
    </Head>
    <section className="py-4 container">
                <div className="row justify-content-center">
     {/* <h1>welcome to next</h1> */}
     {data.map((item,index)=>{
            return(
              
                  <div key={index} className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                    <div className="card p-0 overflow-hidden h-100 border-0 p-3 mb-2 bg-light text-dark" >
                     <img src={item.image[0]} className="card-img-top" alt="card"/>
                      <div className="card-body"> 
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{`$${item.price}`}</p>
                        {/* <button type="button" className="btn btn-info">{item.like}</button> */}
                    </div>
                 </div>
               </div>
              

            )
        })}
        </div>
               </section>
    </div>
  )
}
 export const getStaticProps = async()=>{
   let data=[];
   let error="";
   let hits = [];  

  try {
    const res = await fetch(
      "https://development.coach.com/shop/new?srule=featured&page=4&start=0&fmt=headlessjson",
      {
        method: "GET",
        "headers": {
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "accept-language": "en-US,en;q=0.9,hi;q=0.8",
          "authorization": "Basic c3RvcmVmcm9udDpUYXBlc3RyeTIwMjE=",
          "cache-control": "max-age=0",
          "sec-ch-ua": "\"Google Chrome\";v=\"95\", \"Chromium\";v=\"95\", \";Not A Brand\";v=\"99\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "none",
          "sec-fetch-user": "?1",
          "upgrade-insecure-requests": "1"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
      }
    );

    data = await res.json();
    hits =  data.hits;
    data =  data.schemaData?.itemListElement;

    data = data.map((info, idx) => {
      let price = 0;
      try {
        price = hits[idx]?.variants[0].price;
      } catch(ex) {
        console.error("Not able to fetch price");
      }
      return {
        ...info,
        price
      }
    });
    
  } catch (e) {
    console.error(e);
  }
   return{
     props:{
       data,
       error,
     },
   }
 }
//  style={{height:"153px", width:"252px"}}