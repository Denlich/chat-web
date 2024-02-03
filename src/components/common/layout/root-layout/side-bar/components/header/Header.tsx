import { Grid, Typography } from "@mui/material";

const Header = () => {
  return (
    <Grid container py={2} bgcolor="primary.main" p={1}>
      <Grid item xs={4}></Grid>
      <Grid item xs={4} display="flex" justifyContent="center">
        <Typography variant="h6" component="h6" color="white">
          Chats
        </Typography>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default Header;
