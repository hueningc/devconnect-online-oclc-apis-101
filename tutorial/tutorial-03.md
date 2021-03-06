# A Beginner's Guide to Working with OCLC APIs
## OCLC DEVCONNECT 2018: Pre-Conference Workshop
### Tutorial Part 3 - Dependency Management

1. We'll be using a tool called [NPM](https://www.npmjs.com) to manage our project's dependencies. By "dependencies" we mean the code libraries and other external resources that our project requires in order to run. This includes the OCLC PHP Authentication Library, the MVC framework Slim, the MARC record parser we'll need, and so on.
2. In your project file, create a file called `package.json`.
	1. `$ touch package.json`
3. Open `package.json` in your text editor.
4. Add the following
```
{
  "name": "devconnectprecon_2018",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
  },
  "keywords": [],
  "author": "",
  "license": "Apache 2.0",
  "devDependencies": {
    "chai": "^4.1.2",
    "cucumber": "^4.0.0",
    "cucumber-mink": "^2.0.0",    
    "mocha": "^5.0.1",
    "moxios": "^0.4.0",
    "nodemon": "^1.17.1",
    "serverless": "^1.26.1"
  },
  "dependencies": {
    "aws-serverless-express": "^3.1.3",
    "axios": "^0.17.1",
    "body-parser": "^1.18.2",
    "ejs": "^2.5.7",
    "express": "^4.16.2",
    "js-yaml": "^3.10.0",
    "marc4js": "0.0.9",
    "nodeauth": "git+https://github.com/OCLC-Developer-Network/oclc-auth-node.git",    
    "read-yaml": "^1.1.0",
    "string": "^3.3.3",
    "xmldom": "^0.1.27",
    "xpath": "0.0.27"
  }
}
```

5. Save the file.
6. Create the following directories:
```bash
$ mkdir src
$ mkdir views
$ mkdir test
```
7. Run NPM to install your dependencies:
```bash
$ npm install
```
8. Now, we want to commit our `package.json` file to our GitHub repository, but there is some prep we must do first. You'll notice that the command in the previous step created a `/node_modules/` directory in your project that contains all of the external resources you installed. We do *not* want to put these files in version control.
	1. To tell git to ignore the `/node_modules/` directory, create a `.gitignore` file:
		1. `$ touch .gitignore`
	2. Open `.gitignore` in your text editor.
	3. Add the following lines
	   1. (This includes a few resources other than `/node_modules/`, but we'll get to those later. :wink:)
	   ```
        /node_modules/
        /.project
        /config.yml
	   ```
	4. Save the file.
9. We're now ready to commit our changes to GitHub. To view local changes not yet commited, enter this command:
	1. `$ git status`
	2. This command should output text telling you that your composer.json and .gitignore files are not yet committed.
10. Add these files to the repository:
	1. `$ git add --all`
11. Commit your changes:
	1. `$ git commit -m "added package.json and .gitignore"`
	2. In between the quotes, you can enter whatever description of the changes you would like.
12. Push your changes to your remote repository:
	1. `$ git push origin master`

**[on to Part 4](tutorial-04.md)**

**[back to Part 2](tutorial-02.md)**