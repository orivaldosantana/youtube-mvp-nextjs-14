export const addTeste = async (formData: FormData) => {
  "use server"
  let name = formData.get("nome")
  let email = formData.get("email")
  console.log("Form: " + name + " " + email)
}
