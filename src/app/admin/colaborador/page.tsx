import FormColaborador from "@/ui/forms/colaborador";
import GenericPage from "@/ui/genericpage";

export default function ColaboradorPage() {
  return (
    <div>
      <GenericPage title={"Colaborador"}>
        <FormColaborador title={"Cadastro"} />
      </GenericPage>
    </div>
  );
}
