import { useUserContext } from "../userContext";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";



const Dashboard = () => {
  const { user, setUser } = useUserContext();
  const [file, setFile] = useState ({file: "", text: ""});

  const handleFileChange = (e) => {
    setFile ((prevState) => ({
      ...prevState, [e.target.name]: e.target.files[0]
    }))
  }

  const handleTextChange = (e) => {
    setFile ((prevState) => ({
      ...prevState, [e.target.name]: e.target.value
    }))
  }


  const handleFileUpload = async (e) => {
    
  }



  return (
  <>

    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      component = "form"
      sx={{ display: "flex", flexDirection: "column", m: 5, mx: "auto" }}
      >
      <Typography variant="h5" sx={{ p: 2 }}>
        What do you want to store?
      </Typography>
                <Input type="file" name="file" onChange = {handleFileChange} />
                <TextField
                  margin="normal"
                  required
                  id="text"
                  label="File description"
                  name="text"
                  autoFocus
                  onChange={handleTextChange}
                />
    
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Upload
                </Button>
              </Box>
  
  
  </>
  );
};

export default Dashboard;
