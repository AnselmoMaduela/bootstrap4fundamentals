# Bootstrap 4 Fundamentals

This is a result for following along the boostrap fundamental course from Linkedin Learning Platform, this is a "personal" project but you can use it to perhaps correct you error while following  Ray's course. **Enjoy**

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Basic Knowlodge with:
* [Gulp](https://gulpjs.com/) 
* [Sass](https://sass-lang.com/documentation/file.SASS_REFERENCE.html)

## Built With

* [Boostrap 4](https://getbootstrap.com) - the Web framework used
* [NPM](https://www.npmjs.com/) - for Dependency Management
* [Gulp](https://github.com/gulpjs/gulp/blob/v3.9.1/docs/API.md) - for Build process Automation

The script bellow you will find in [gulpfile](gulpfile.js)
```
gulp.task("compilecss", function() {
  return gulp.src("./source/sass/**/*.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sass())
    .on('error', notify.onError({title: 'Erro ao compilar', message: '<%= error.message %>'}))
    .pipe(gulp.dest("./dist/css"));
});
```
The above task looks for **scss** file modificated, compiles it and minifies using [gulp-sass](https://www.npmjs.com/package/gulp-sass), and it finishes by setting *or* copies the new file to the folder dist/css with the *.css* extension 

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Anselmo Maduela** - *Initial work* - [Bootstrap4Fundamentals](https://github.com/bootstrap4fundamentals)

You can also checkout the list of [contributors](https://github.com/AnselmoMaduela/bootstrap4fundamentals/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - click [here](https://rem.mit-license.org/) for details
