'use strict';

module.exports = {
    find: async ctx => {
        try {

            let result = await strapi.query('artist').find()
            let objResponse = {}
            objResponse.data = result

            objResponse.data.forEach(function(artist){ 
                delete artist.createdAt
                delete artist.updatedAt
                delete artist.created_by
                delete artist.updated_by
                delete artist._id
                delete artist.__v
                delete artist.published_at
                delete artist.links.id
                delete artist.links._id
                delete artist.links.__v
            });

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
