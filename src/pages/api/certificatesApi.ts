import { MongoClient } from "mongodb";

const client = new MongoClient(import.meta.env.MONGODB_URI)

export async function GET() {
    try {
        await client.connect()

        const database = client.db("Portfolio")
        const certificatesCollection = database.collection("Certificates")

        const certificates = await certificatesCollection.find({}).toArray()

        return new Response(JSON.stringify(certificates), { status: 200, headers: { "Content-Type": "application/json" } })
    } catch (error) {
        console.log(error)
    }
}