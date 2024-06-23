import { Box, Container, Typography } from "@mui/material";

function GenericPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" sx={{ color: "#3030a1", margin: 5 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export default GenericPage;
