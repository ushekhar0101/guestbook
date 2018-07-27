/**
 * Prepare the guestbook entry to be persisted
 */
function main(params) {
  if (!params.name || !params.comment || !params.email) {
    return Promise.reject({error: 'Insufficient Data'});
  }

    entries: params.rows.map((row) => { return {
	    email-o: row.doc.email
    }})
  if (params.email = email-o) {
	  return Promise.reject({error: 'Already registered Email ID'});
  }
	return {
    	doc: {
	  createdAt: new Date(),
	    name: params.name,
	    email: params.email,
	    comment: params.comment,
	  }
  };
}
