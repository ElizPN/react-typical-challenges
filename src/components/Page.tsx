import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

interface PageProps {
  title: string;
  body: string;
  ComponentExample?: React.FC;
}

export function Page(props: PageProps) {
  const { ComponentExample: ComponentExample, title, body } = props;

  return (
    <Box>
      <h2 data-testid='title'>{title}</h2>
      <div data-testid='body'>{body}</div>
      {/* if component exists, we use it */}
      <Card sx={{ maxWidth: 200, border: 1, p: "10px" }}>
        <Typography sx={{ mb: 1.5 }} color='primary.main'>
          Try yourself
        </Typography>
        {ComponentExample && <ComponentExample />}
      </Card>
    </Box>
  );
}
