// Reformats phonology data into format needed for API call
const cleanPhono = (phonos) => {
    let cleanedPhonos = [];
    phonos.forEach( phono => {

        let cleanedPhono = [];
        phono.forEach( row => {
            let cleanedRow = row.filter(cons => cons.split(" ").join("") !== "");
            const iterLen = cleanedRow.length

            // Separate consonants with the same place and manner of articulation
            for (let i = 0; i < iterLen; i++) {
                let cons = cleanedRow[i].split(" ").join("");
                cons = cons.split(",");

                cleanedRow[i] = cons[0]
                if (cons.length > 1) {
                    cleanedRow = cleanedRow.concat(cons.slice(1));
                } 
            }

            cleanedPhono = cleanedPhono.concat(cleanedRow)
        });

        if (cleanedPhono.length > 0) {
            cleanedPhonos = cleanedPhonos.concat([cleanedPhono]);
        }
    });

    return cleanedPhonos;
}

export default cleanPhono;