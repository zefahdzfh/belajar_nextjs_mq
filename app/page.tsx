import Button from "./component/button";
import InputText from "./component/inputText";
import Latihan from "./component/latihan";
import Note from "./component/note";
function Home() {
  return (
    <>
      <h1>Hello World</h1>

      
      <Latihan name="izan" age={18} username="izan" isVerified />
      <Latihan name="zaky" age={15} username="zaky" isVerified={false} />

      <Button title="save" isDisabled />
      <Button title="cancel" />
      

      <Note title=" Belajar NextJS" status="success">
        <div className="">Sedang belajar NextJS</div>
      </Note>

     <Note title=" Belajar NextJS" status="success">
     <Button title="cancel"/>
     <Latihan name="zefa" age={15} username="zefa" isVerified={true} />
     </Note>

     <Note title=" Belajar NextJS" status="warning">
      ok
     </Note>

     <Note title="latihan" status="success">
        <div className="">
          <h5>latihan</h5>
        </div>
     </Note>


     <input name="username" type="text" value={'ok'} />
     <InputText isError value={'123'} type="password"></InputText>
     <InputText isError={true} value={'tes'} placeholder="username" type="text"></InputText>
     <InputText value={237372897398}></InputText>


    </>
  );
}

export default Home;
