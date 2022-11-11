import Link from "next/link";
import SideFields from "./side";
import { Grid, Typography } from "@mui/material";

export default function Registration() {
  return (
    <Grid container>
      <Grid
        item
        xs={0}
        sm={0}
        md={0}
        lg={7}
        xl={7}
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          },
        }}
      >
        <Typography>Image Placeholder</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
        <SideFields />
      </Grid>
    </Grid>
  );
}
