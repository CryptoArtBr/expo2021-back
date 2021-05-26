'use strict';

module.exports = {
    data: async ctx => {
        try {

            let result = await strapi.query('artista').find()
            let objResponse = {}
            objResponse.data = result
           

            objResponse.data.forEach(function(artista){ 
                delete artista.createdAt
                delete artista.updatedAt
                delete artista.created_by
                delete artista.updated_by
                delete artista.published_at
                delete artista._id
                delete artista.__v

                delete artista.Links.__v
                delete artista.Links._id
                delete artista.Links.id
            });
                        
           // objResponse.status = "ok"
            ctx.send(JSON.stringify(objResponse))
            return

        } catch(e) {
            console.log(e); // error, probably in JSON.Parser
        }

        let objResponse = {}
        objResponse.status = "fail"
        objResponse.status_message = "error_not_found"
        ctx.send(JSON.stringify(objResponse))
    }

};