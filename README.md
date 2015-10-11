# voting-app

[![Join the chat at https://gitter.im/CodepenCreativeChallenge/voting-app](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/CodepenCreativeChallenge/voting-app?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Waffle/Kanban Board: https://waffle.io/CodepenCreativeChallenge/voting-app

## Git

we work with feature branches and rebasing. If you need help on the flow just ping/mention [Gregor Adams](https://github.io/pixelass) in an issue or in the gitter channel. I am pretty good at fixing broken git histories. Don't worry we will figure it out even if you are a git noob. For the first steps I will even rebase the master to make it easier to go back and forth until we know what we really want. When we all agree we can start merging into master.


Create a new branch:

```shell
git checkout -b feature/my-feature
git add [my files]
git commit -m "commiting stuff"
git add [my files]
git commit --amend
## extend existing commit message or overwrite
git push origin feature/my-feature
```

Open a pull-request to master and assign someone to review. (best case someone you think can judge the feature)

I use TJ's [git-extras](https://github.com/tj/git-extras)

to allow:

```shell
git feature my-feature
git bug something-broke
```

If you don't like git on the command line you can use GUI-tools like [sourcetree](https://www.atlassian.com/software/sourcetree/overview). It's not for me but it's definitely one of the better git GUI-tools.

Always remember we are here for fun so feel free to kick in some ideas. We obviously don't want a standard material design app but rather something creative and amazing.

## developing

To generate all files you need to run

```shell
gulp
```

to start a dummy server you can use

```shell
gulp serve
```

Some file changes rquire to manually run `gulp`. This can be done while `gulp serve` is running.

More info [here](https://github.com/PolymerElements/polymer-starter-kit)

We are now using [Jade](http://jade-lang.com) so the development has mainly been moved from the `app` folder to the `templates` folder.
The following file changes will not take effect anymore.

```
  app/index.html
  app/elements/*
```

## database

Polymer has a really nice firebase integration. I set up a dummy firebase at  
* https://brilliant-inferno-5434.firebaseio.com/
* ccc-devs@pixelass.com
* to get the password send me a private message in gitter
