![Hacktoberfest2020](https://hacktoberfest.digitalocean.com/assets/HF-full-logo-b05d5eb32b3f3ecc9b2240526104cf4da3187b8b61963dd9042fdc2536e4a76c.svg)

## Project Description

This is a simple web application to show the hello world programmes in all the possible progamming language created so far . If you are looking to begin your open source journey and make your first PR for hacktoberfest 2020 . This is a great oppurtunity for you . Please read contribution guide before making any PR.

## Fun Fact

Wikipedia has a list whose goal is to include “all notable programming languages in existence”, that currently lists over <strong>700 programming</strong> languages. Wikipedia’s list excludes certain types of languages such as markup languages.

Get the whole list of programming language from [here](https://en.wikipedia.org/wiki/List_of_programming_languages) .
Feel free to create a issue if a programme for that language is not added .

### Contribution Guide

1. Fork this Repository.
2. Clone the Repository on your system using the command - `git clone [url of the forked repository]`
3. Create a new branch using the command - `git branch [branch-name]`
4. Move to the new branch by using this command - `git checkout [new branch-name]`
5. Add a card with the image of your programme, Language Name and mention your Github Profile name in the Button.
6. Once you've made your changes make sure you pull changes in master just in case - `git checkout master` -> `git pull`
7. Then again checkout to your new branch and pull from master branch - `git checkout [new branch name]` -> `git pull`
8. Add your content using the command - `git add -A`
9. Commit the changes using the command - `git commit -m "your-message"`
10. Push the changes using the command - `git push origin [branch-name]`
11. Creat a Pull request.
12. Star this Repository.

For reference check out : www.youtube.com/watch?v=c6b6B9oN4Vg

# What to do in this project ?

- First visit [carbon.now.sh](https://carbon.now.sh/)
- choose a nice background
- write the programe
- save the image as png
- name the image as [programming language].png
- store the image in images folder
- use below template code , and add this at the very bottom of **config.js**, before `]`
- commit your changes
- now create a PR mention the image in PR also

**Template Code + Example**

```
let data = [
    // ...
    
    // Code template
    // Note: Put this at the very bottom of this file, but before ]
    {
        'lang': "[Language Name]",
        'lang-name': "[Language Name]",
        'lang-image': "[Image address]",
        'lang-image-attr': "[Language Name]",
        'contributor': "Contributed by - [Your name]",
        'contributor-link': "[Your GitHub profile link]", 
    }, // <- Remember to add comma (,)


    // Example code
    {
        'lang': "JavaScript",
        'lang-name': "JavaScript",
        'lang-image': "./images/javascript.png",
        'lang-image-attr': "JavaScript",
        'contributor': "Contributed by - kmrakash",
        'contributor-link': "https://www.github.com/kmrakash",
    },
]
```
