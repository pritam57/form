import React from "react";
import {TextField,Button,Container,Typography} from '@material-ui/core';

const File = () =>{
    return(
        <div>
        
        <Container style={{AlignItem:"center",display:"flex", flexDirection:"column",width:"40%",border : "solid 1px lightgrey",boxShadow:"5px", backgroundColor:"#f2f2f2"}}>
        <Typography gutterBottom variant="h5" style={{textAlign:"center"}}> Book a visit</Typography>
       
        <TextField style={{marginBottom:"10px"}}  label={"Property id"} color="primary" variant="outlined" placeholder="typr your id" />
       
       
        <TextField style={{marginBottom:"10px"}}  label={" name"} color="primary" variant="outlined" placeholder="typr your name" />
       
        <TextField style={{marginBottom:"10px"}}  label={" mobile no"}  type="tel" color="primary" variant="outlined" placeholder="typr your name" />

    
        <TextField  style={{marginBottom:"10px"}}  type="email"   label={"email"} color="primary" variant="outlined" placeholder="typr your name" />

        <TextField
        id="date"
        label="visiting date"
        type="date"
        defaultValue="2022-07-26"
        style={{marginBottom:"10px"}}
      />
      
        <Button className="hu" color="primary" variant="outlined">Book</Button>
       
       
        </Container>
        </div>
    )
}

export default File;