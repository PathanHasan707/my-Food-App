import { useState } from "react"


function Category() {
    const [food, setFood] = useState([])

    const get = async () => {
        const { error, data } = await supabase.from("Food-Data").select("*").order("created_at", { ascending: true })
        if (error) {
            console.log(error)
        } else {
            console.log(data)
        }
        setFood(data)

    }
    useEffect(() => {
        get();
    }, [])
    return (
        <div>
            {food.map((f) => (
                <div key={f.id}   >
                    <img src={f.img} alt="" />
                    <h2>{f.name}</h2>
                </div>


            ))}
        </div>
    )
}

export default Category