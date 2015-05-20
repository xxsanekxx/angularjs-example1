module.exports = {
    bower: {
        files: [
            // start bower
            /*{
                src: 'bower_components/angular/angular.min.js',
                dest: '<%= destPath %>/js/angular.min.js'
            },*/
            //{
            //    expand: true,
            //    cwd: "bower_components/angular/",
            //    src: ["**/*.js", "**/*.map"],
            //    dest: "<%= destPath %>/js/"
            //},
            {
                src: 'bower_components/angular/angular.min.js',
                dest: '<%= destPath %>/js/angular.min.js'
            },
            {
                src: 'bower_components/angular/angular.min.js.map',
                dest: '<%= destPath %>/js/angular.min.js.map'
            },
            // fontAwesome
            {
                expand: true,
                cwd: "bower_components/font-awesome/fonts/",
                src: ["**/*"],
                dest: "<%= destPath %>/fonts/"
            }
            //end bower
        ]
    },
    scripts: {
        files: [
            {
                expand: true,
                cwd: "build/js/",
                src: ["**/*.js"],
                dest: "<%= destPath %>/js/"
            }
        ]
    }
};
