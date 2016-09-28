// Blocking example
data = downloadURL('http://api.social.com/people/1.json')
person = JSON.decode(data);
name= person.name;
print(name); // => 'loren ipsum'

// Non-blocking example
http.get('http://api.social.com/people/1.json'){
  if (err) throw new Error(err);
  var person = JSON.parse(res.data)
    , name=person.name;
  console.log(name);// => 'loren ipsum'
  });
