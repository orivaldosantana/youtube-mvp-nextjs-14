'use client'
import { addUser } from '@/app/lib/action'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button' // Add this line to import the Button component
import { IconButton, Typography, Alert, Collapse } from '@mui/material'
import { Close } from '@mui/icons-material'
import { useFormState } from 'react-dom'
import { useEffect, useState } from 'react' // Add this line to import the useEffect hook

const initialState = {
  message: ''
}

export default function FormColaborador({ title }) {
  const [state, formAddUserAction] = useFormState(addUser, initialState)
  const [openAlert, setOpenAlert] = useState(false)

  useEffect(() => {
    console.log(state)
    //setOpenAlert(true)
    if (state?.message) setOpenAlert(true)
  }, [state])

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        {title}
      </Typography>
      <form action={formAddUserAction}>
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
        <Collapse in={openAlert}>
          <Alert
            severity={state?.type}
            action={
              <IconButton onClick={() => setOpenAlert(false)}>
                <Close />
              </IconButton>
            }
          >
            {state?.message}
          </Alert>
        </Collapse>
      </form>
    </Box>
  )
}
