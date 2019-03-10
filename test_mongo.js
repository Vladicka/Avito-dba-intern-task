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

	//cursor=db.users.find({ first_name: 'Rin' })
	//obj=JSON.stringify(tojson(cursor.next()))
	//print(obj)
	//jsonobj=JSON.parse(obj)
	//print (typeof jsonobj)
	//print(jsonobj["first_name"])
	//if (tojson(cursor.next())["first_name"] != 'Rin'){
		//res = 'False'
		//print(res)
	//}

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

