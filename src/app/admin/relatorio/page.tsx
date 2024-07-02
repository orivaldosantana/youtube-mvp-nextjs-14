import { getUserData } from "@/app/lib/data";
import GenericPage from "@/ui/genericpage";

export default async function RelatorioPage() {
  const users = await getUserData();

  return (
    <GenericPage title={"Relatórios"}>
      {users !== undefined && (
        <div>
          {users.map((user) => (
            <div key={user.name}>{user.name}</div>
          ))}
        </div>
      )}
    </GenericPage>
  );
}
