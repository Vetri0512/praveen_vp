import { Grid } from "@mui/material";
import Header from "./Modules/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Grid container>
      <Grid item md={12} m="12px" height="calc(10vh -  40px)">
        <Header />
      </Grid>
      <Grid item md={12} height="calc(90vh -  30px)">
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default App;
