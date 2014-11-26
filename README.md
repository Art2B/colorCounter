#Color Count
Color Count is a web app made to count stuff. You wanna count how many handshakes you give from now ? You're in the right place, Color Count is made for that !

Demo coming soon. Star and follow to stay tuned !

#How to run my own Color Count ?
Color Count is an app built with Angular, Npm, Grunt and Bower. You'll need to have Grunt and Bower installed on your computer.
You'll need a firebase database for this project. Create your own [here](https://www.firebase.com/)

##Commands
Run the following commands.

1. `git clone https://github.com/Art2B/colorCounter.git`
2. `cd colorCount`
3. `npm install`
4. `bower install`
5. `grunt`

At this point you'll have the base of the app. But before running it, you need to set your config.js file with the following code. You can use the `example.config.js` file

```javascript
var fireName = 'Firebase database name'; // Example: gh5b979cx6t for https://gh5b979cx6t.firebaseio-demo.com/
var passPhrase = "Passphrase"; // The passphrase to encrypt the password
```
Once you have set this up, run `grunt serve`, then got to localhost and enjoy counting stuff

#I want MOAR !

Roadmap. Coming soon