import { addUser } from "@/app/lib/action"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button" // Add this line to import the Button component
import { Typography } from "@mui/material"

export default function FormColaborador({ title }) {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        {title}
      </Typography>
      <form action={addUser}>
        <TextField
          name="nome"
          label="Nome"
          fullWidth
          required
          variant="filled"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          name="email"
          label="Email"
          fullWidth
          required
          variant="filled"
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" type="submit" fullWidth>
          Cadastrar Colaborador
        </Button>
      </form>
    </Box>
  )
}
