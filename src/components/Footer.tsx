import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {"© "}
      <Link
        data-testid='github-link'
        color='inherit'
        href='https://github.com/ElizPN'
      >
        My GitHub
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box component='footer' sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth='lg'>
        <Typography variant='h6' align='center' gutterBottom></Typography>
        <Typography
          variant='subtitle1'
          align='center'
          color='text.secondary'
          component='p'
        ></Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
