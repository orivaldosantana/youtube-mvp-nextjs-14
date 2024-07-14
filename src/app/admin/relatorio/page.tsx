import GenericPage from '@/ui/genericpage'
import { getUserData } from '@/app/lib/data'

export default async function RelatorioPage() {
  const users = await getUserData()
  return (
    <GenericPage title={'Relatórios'}>
      {users !== null && (
        <div>
          {users.map(user => (
            <div key={user.id}>
              {user.name} - {user.email}
            </div>
          ))}
        </div>
      )}
    </GenericPage>
  )
}
