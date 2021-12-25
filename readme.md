## Simple server providing themed ascii art for our VM (:

----


1. The art will reset once a deploy is run
2. This is simple... this is safe... everythings fine 😎

(while ssh'd in)

`cd ~ ; curl http:localhost:3000/swag > ../etc/motd ; exit`

(now ssh back in to your vm, and experience greatness)

1 command. That's it (: enjoy... or continue reading to have some real some with this. 

### So what is this command doing exactly? 
 1. Changes to home directory
 2. Pipe response (text file) into the motd file which holds vm art at startup
 3. Exits vm (this can be omitted... next time you ssh back in, the art will appear)

This is local to your vm, so you can always run a deploy.sh to reset... or send another request to the server with an invalid keyword and pipe the response into the file as shown above (invalid keyword will return default art) 

## Endpoints: 
`curl http://localhost:3000/holiday`

	- Returns holiday themed ascii art according to the current date/time

`curl http://localhost:3000/{keyword}`

    - Returns specified keyword art (list below) 

**If a request fails due to client errors, the default Bitly ascii art will be returned**


## Example using keyword
We'll go ahead and use "groundhog" as our keyword
However, you can replace "groundhog" with any keyword that exists in the list

`cd ~ ; curl http:localhost:3000/groundhog > ../etc/motd ; exit`



keywords available:
christmas newyears mlk groundhog presidents easter memorial independence labor columbus veterans thanksgiving swag


Contributing
----
### Add ascii arrt

- [ ] insert ascii art with unique name (.txt file) `/ascii_art/random` folder
- [ ] provide mapping in `files` object under "random" `/handle/constants.js`
- [ ] add new file name to readme.md

### Add holiday
Now supplying a holiday is a bit of a mission becuase we have to make sure the dates don't overlap => /handle/constants.js `dates` && `holidays`
 

- [ ] Add the text file too /ascii_art folder
- [ ] Provide mapping in `files` object 
- [ ] Provide mapping in `dates` object (date format: 'dd/mm/____')
- [ ] Provide mapping in `holidays`
	- [ ] `key: [dates.key.start, dates.key.end, file.key]`
- [ ] Add new file name to readme.md

	
