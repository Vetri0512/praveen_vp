import { Button, Grid, Typography } from "@mui/material";

const Header = () => {
  const name = "PRAVEEN";

  const Title = ["About", "Doc", "contact"];

  return (
    <Grid container alignItems={"center"}>
      <Grid item md={5}>
        <Typography variant="h3" textAlign={"center"} fontFamily={"serif"}>
          {name}
        </Typography>
      </Grid>
      <Grid item md={6}>
        <Grid container>
          {Title.map((item) => (
            <Grid item md={4} textAlign={"center"}>
              <Button
                sx={{
                  textDecoration: "none",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "red",
                    color: "#3c52b2",
                  },
                }}
                disableRipple
                disableTouchRipple
                disableElevation
                disableFocusRipple
              >
                {item}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item md={1}>
        <Typography textAlign={"center"}> avadar</Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
