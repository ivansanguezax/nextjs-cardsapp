async function getUser(id){
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    return data.data ;
}

async function UserPage ({params}){
    const user = await getUser(params.id)
    
    return (
        <div className="container mx-auto flex items-center justify-center h-screen ">
          <div className="bg-gray-900 p-8 shadow-md rounded-md text-center dark:bg-gray-700">
            <h1 className="text-2xl font-bold mb-4 text-white">{user.first_name} {user.last_name}</h1>
            <img src={user.avatar} alt={user.first_name} className="w-32 h-32 rounded-full mx-auto mb-4" />
            <p className="text-gray-300 dark:text-gray-500">{user.email}</p>
          </div>
        </div>
      );
      
      
}

export default UserPage;