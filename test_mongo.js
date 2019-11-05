var test = function(){
	var res='True'
	db = db.getSiblingDB('avito_test')
	if (db.getName()!='avito_test'){
		res = 'False'
	}

	object=db.createCollection('users')
	if (object.ok != 1){
		res = 'False'
	}

	object=db.getCollectionNames()
	if (object != 'users'){
		res = 'False'
	}

	object=db.users.insert({ first_name: 'Rin', last_name: 'Tohsaka'} )
	if (object.nInserted != 1){
		res = 'False'
	}

	object=db.users.drop()
	if (object != true){
		res = 'False'
	}

	object = db.dropDatabase()
	if (object.dropped != 'avito_test' && object.ok != 1){
		res = 'False'
	}
	return(res)
};
print(test())

