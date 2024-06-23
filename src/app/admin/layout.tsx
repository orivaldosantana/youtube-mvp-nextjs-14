import Header from "@/ui/header"
import Navbar from "@/ui/navbar"
import { Box } from "@mui/material"

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Box sx={{ flexDirection: "row", display: "flex" }}>
        <Navbar />
        {children}
      </Box>
    </div>
  )
}
