import EditTopicForm from '@/components/EditTopicForm'

const getTopicById = async (id) =>{
  try{
    const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
      cache:"no-store"
    })
    if(!res.ok){
      throw new Error("Failed to fetch topic")
    }
    return res.json()
  }
  catch(error){
console.log(error);
  }
}

export default async function EditTopic ({params})  {

  const {id} = params;
  //we're destructuring {topic} because we'll receive an object and it will have "topic" property and that topic property will contain all data
const {topic} = await getTopicById(id);
const {title, description} = topic;

return <EditTopicForm id={id} title={title} description={description} />;
}
