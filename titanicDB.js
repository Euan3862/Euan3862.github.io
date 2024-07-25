const { Console } = require('console');
const { MongoClient } = require('mongodb');

async function main() {

    const uri = "mongodb+srv://euanmullen:HoTlfT2LirnpaiOF@titanicmessagedb.ggdpmwt.mongodb.net/?retryWrites=true&w=majority&appName=titanicMessageDb";
    
    const client = new MongoClient(uri);

    try {
        await client.connect();

        await findMessageBySender(client,"Carmania");
        //await listDatabases(client);

    } catch (error) {

        console.error(error);

    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(`  - ${db.name}` ));
}

async function findMessageBySender(client, nameOfSender) {
    const result = await client.db("titanicMessages").collection("messages").findOne({Sender: nameOfSender});

    if (result) {
        console.log(result);
    } else {
        console.log("No result");
    }
}

