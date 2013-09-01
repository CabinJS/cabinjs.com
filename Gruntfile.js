module.exports = function (grunt) {

  grunt.initConfig({
    watch: {
      dist: {
        files: ['dist/**'],
        options: {
          livereload: true
        }
      },
      compass: {
        files: ['src/styles/**'],
        tasks: ['compass']
      },
      pages: {
        files: ['posts/**', 'src/layouts/**'],
        tasks: ['pages']
      },
      copy: {
        files: ['src/images/**', 'src/styles/**.css', 'src/styles/fonts/**', 'src/scripts/**'],
        tasks: ['copy']
      }
    },
    'gh-pages': {
      options: {
        base: 'dist'
      },
      src: ['**']
    },
    pages: {
      posts: {
        src: 'posts',
        dest: 'dist',
        layout: 'src/layouts/post.jade',
        url: ':title'
      }
    },
    connect: {
      dist: {
        options: {
          port: 5455,
          hostname: '0.0.0.0',
          middleware: function (connect) {
            return [
              require('grunt-contrib-livereload/lib/utils').livereloadSnippet,
              connect.static(require('path').resolve('dist'))
            ];
          }
        }
      }
    },
    open: {
      dist: {
        path: 'http://localhost:5455'
      }
    },
    clean: {
      dist: 'dist'
    },
    compass: {
      options: {
        sassDir: 'src/styles',
        cssDir: 'dist/styles'
      },
      dist: {}
    },
    // Move files not handled by other tasks
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'src',
          dest: 'dist',
          src: [
            'CNAME',
            'images/**',
            'styles/**.css',
            'styles/fonts/**',
            'scripts/**'
          ]
        }]
      }
    }
  });

  grunt.registerTask('deploy', [
    'build',
    'gh-pages'
  ]);

  grunt.registerTask('build', [
    'clean',
    'compass',
    'pages',
    'copy'
  ]);

  grunt.registerTask('server', [
    'build',
    'connect',
    'open',
    'watch'
  ]);

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', 'server');
};
