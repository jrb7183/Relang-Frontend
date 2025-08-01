## About
This is the frontend for my project Relang. See more details [here](https://github.com/jrb7183/Relang). 

## Running the App
To run the app, you need to download both this repository and the [Relang](https://github.com/jrb7183/Relang) repository (see instructions on the latter in that repository). Once you have downloaded the Relang-Frontend repository and downloaded all of the requiremenets, type `cd relangapp` into the command line and then `npm start`. The application should appear in your browser.

On the website, you have the option to add consonants to your sound inventories, add new sound inventories, and remove old ones. If you leave the sound inventories completely blank (it doesn't matter how manny you've added to the screen) and press the `Get Consonants!` button, it will generate a phonology of random length. Otherwise, the app will generate a phonology based on your input.

When inserting consonants into one of the inventory tables, separate any consonants at the same place with a comma (spacing doesn't matter). If the app raises an error, then it most likely comes from encountering a symbol that it does not recognize as a valid IPA symbol, with or without diacritics.
