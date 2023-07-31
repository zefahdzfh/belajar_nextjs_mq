import Button from "./component/button"
import Latihan from "./component/latihan"
import Note from "./component/note"
function Home(){
  return(
    <>
     <h1>Hello World</h1>
{/* 
     <Latihan name="zefa" age={15} username="zefa" isVerified={true} />
     <Latihan name="izan" age={18} username="izan" isVerified  />
     <Latihan name="zaky" age={15} username="zaky" isVerified={false} /> */}

     <Button title="save" isDisabled/>
     <Button title="cancel"/>

     <Note title=" Belajar NextJS" status="success">
      <div className="">Sedang belajar NextJS</div>
     </Note>
     <Note title=" Belajar NextJS" status="success">
     <Button title="cancel"/>
     </Note>
     <Note title=" Belajar NextJS" status="success">
      ok
     </Note>

     <Note title="latihan" status="success">
        <div className="">
          <h5>latihan</h5>
        </div>
     </Note>
    </>
   
  )
}

export default Home