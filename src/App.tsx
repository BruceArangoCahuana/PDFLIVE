import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Plantilla from './Plantillas/Plantilla';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PlantillaHTML from './Plantillas/Html/PlantillaHTML';
import { Alert, Container, Paper } from '@mui/material';

function App() {
 const[name,setName] = React.useState<any>("")
 const[de,setDe] = React.useState<any>("")
 const[para,setPara] = React.useState<any>("")

 const[alert,setAlert] = React.useState<boolean>(false)

 const alertas = () =>{
  return(
    <>
      <Alert severity="success">Se cargo correctamente</Alert>
    </>
  )
 }

 const transfer = () =>{
   if(name !== "" && de !== "" && para !== ""){
    setAlert(true)
  }
 }
 //TODO:Render view PDF
 //<PDFViewer className='w-full'>
   //           <Plantilla />
      //      </PDFViewer>  
 
 return (
    <Fragment>
  
       <Container className='mt-5'>
          <Paper style={{
            padding:'4px'
          }}>
              {alert ?  alertas() : ''}
              <PlantillaHTML
                setName={setName}
                setDe={setDe}
                setPara={setPara}
              />
              <button onClick={transfer} className='bg-orange-500 py-1 px-1  mr-3 text-white'
              style={{
                borderRadius:'8px'
              }}
              >Transferir</button>
              <PDFDownloadLink 
              className='bg-orange-300 py-1 px-1  mr-3 text-white'
              style={{
                borderRadius:'8px'
              }}
              document={
                <Plantilla
                name={name?name:""}
                de={de?de:""}
                para={para?para:""}
                />
              } fileName="myfirstpdf.pdf">
                {({ loading, url, error, blob }) =>
                  loading ? (
                    <button>Loading Document ...</button>
                  ) : (
                    <button>Download now!</button>
                  )
                }
            </PDFDownloadLink>
          </Paper>
        </Container>
       

    </Fragment>
  );
}

export default App;
