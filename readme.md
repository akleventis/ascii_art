## Simple server providing themed ascii art for our VM (:

----

1. The art will reset once a deploy is run
2. This is simple... this is safe... everything is going to be okay 😎

(while ssh'd in)

`cd ~ ; curl https://ascii.alexcod.es/random > ../etc/motd ; exit`

(now ssh back in to your vm, and experience greatness)

1 command. That's it (: enjoy... or continue reading to have some real some with this. 

### So what is this command doing exactly? 
 1. Cd to home directory
 2. Pipes http response (text file) into `motd`  which holds vm art at startup
 3. Exits vm (this can be omitted... next time you ssh back in, the art will appear)

*This is local to your vm, so you can always run a deploy.sh to reset... or send another request to the server with an invalid keyword and pipe the response into the file as shown above (invalid keyword will return default art)*

## Endpoints: 
`https://ascii.alexcod.es/holiday`

	- Returns holiday themed ascii art according to the current date/time (defaults to bitly if !around a holiday)

`https://ascii.alexcod.es/random`  * The fun one lol

    - Returns random ascii art

`https://ascii.alexcod.es/{keyword}`

    - Returns specified keyword art (list below) 

**If a request fails due to client errors, the default Bitly ascii art will be returned**

# Valid keywords
|              |              |              |
| -------      | -------------| -----------  |
| swag         | fire         | cats         |
| dogs         | southpark    | starwars     |
| adventuretime| shred        | yolo         |
| flowers      | newman       |              |
| -----------  | ------------ | ------------ |
| christmas    | newyears     | mlk          |
| groundhog    | presidents   | easter       |
| memorial     | independence | labor        |
| columbus     | veterans     | thanksgiving | 
| stpatricks   | cincodemayo  | halloween    | 


## Example using keyword
We'll go ahead and use "shred" as our keyword
However, you can replace "shred" with anything listed in the table above

`cd ~ ; curl https://ascii.alexcod.es/shred > ../etc/motd ; exit`

Contributing
----
### Add ascii art

- [ ] insert ascii art with unique name (.txt file) `/ascii_art/random` folder
- [ ] provide mapping in `files` object under "random" `/handle/constants.js`
- [ ] add to items array in `getRandomFile()`, location: `/handle/handlers.js`
- [ ] add new file name to readme.md
- [ ] Or... just add a new ascii art and hit me up... i'll code it out real quick 😂

### Add holiday
Now supplying a holiday is a bit of a mission becuase we have to make sure the dates don't overlap => /handle/constants.js `dates` && `holidays`

- [ ] Add the text file too /ascii_art folder
- [ ] Provide mapping in `files` object 
- [ ] Provide mapping in `dates` object (date format: 'dd/mm/____')
- [ ] Provide mapping in `holidays`
	- [ ] `key: [dates.key.start, dates.key.end, file.key]`
- [ ] Add new file name to readme.md
- [ ] Or... just hmu and I'll code it out 

tests: `npm run test:watch`
