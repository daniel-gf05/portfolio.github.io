import { MongoClient } from "mongodb";

// Conexión a la base de datos
const client = new MongoClient(import.meta.env.MONGODB_URI);

export async function GET() {

    try {

        // Establecer conexión
        await client.connect()

        // Apuntar a la base de datos y colección
        const database = client.db('Portfolio');
        const projectsCollection = database.collection('projects');

        // Ejecuto la consulta y lo convierto en un js array
        const projects = await projectsCollection.find({}).toArray();
        console.log("Data obtained:", projects)

        return new Response(JSON.stringify(projects), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        })
    } catch (error) {
        console.log(error)
    }
}