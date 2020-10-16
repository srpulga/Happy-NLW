const Database = require('./db.js')
const saveOrphanage = require('./saveOrphanage.js')

Database.then(async (db) => {
    //inserir dados na tablea
    await saveOrphanage(db, {
        lat: "-25.3712852",
        lng: "-49.2545013",
        name: "Lar dos Meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em sitaução de reisto e/ou vulneravilidade social.",
        whatsapp: "192381923",
        images: [
            "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",

            "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1324&q=80"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    })

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM  orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    //apagar um dado
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
})