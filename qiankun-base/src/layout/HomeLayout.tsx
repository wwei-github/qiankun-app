import Grid from "@mui/material/Unstable_Grid2";
import Header from "../pages/Header";
import Menu from "../pages/Menu";
import Content from "../pages/Content";
export default function HomeLayout() {
  return (
    <Grid container spacing={2}>
      <Grid md={12}>
        <Header />
      </Grid>
      <Grid xs={3}>
        <Menu />
      </Grid>
      <Grid xs={9}>
        <Content />
      </Grid>
    </Grid>
  );
}
