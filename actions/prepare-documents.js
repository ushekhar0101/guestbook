/**
 * Prepare the guestbook entry to be persisted
 */
function main(params) {
  if (!params.name || !params.comment || !params.email) {
    return Promise.reject({error: 'Insufficient Data'});
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
