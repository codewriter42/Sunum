(function() {
  particlesJS('particles-js', {
    'particles': {
      'number': {
        'value': 100,
        'density': {
          'enable': true,
          'value_area': 1000
        }
      },
      'color': {
        'value': ['#111111', '#222222']
      },
      'shape': {
        'type': 'circle',
        'stroke': {
          'width': 0,
          'color': '#fff'
        },
        'polygon': {
          'nb_sides': 5
        }
      },
      'opacity': {
        'value': 0.6,
        'random': false,
        'anim': {
          'enable': false,
          'speed': 1,
          'opacity_min': 0.1,
          'sync': false
        }
      },
      'size': {
        'value': 2,
        'random': true,
        'anim': {
          'enable': false,
          'speed': 40,
          'size_min': 0.1,
          'sync': false
        }
      },
      'line_linked': {
        'enable': true,
        'distance': 80,
        'color': '#111',
        'opacity': 0.9,
        'width': 1
      }
    },
    'interactivity': {
      'detect_on': 'canvas',
      'events': {
        'onhover': {
          'enable': true,
          'mode': 'grab'
        },
        'onclick': {
          'enable': false
        },
        'resize': true
      },
      'modes': {
        'grab': {
          'distance': 240,
          'line_linked': {
            'opacity': 1
          }
        },
        'bubble': {
          'distance': 600,
          'size': 80,
          'duration': 8,
          'opacity': 6,
          'speed': 3
        },
        'repulse': {
          'distance': 300,
          'duration': 0.4
        },
        'push': {
          'particles_nb': 2
        },
        'remove': {
          'particles_nb': 4
        }
      }
    },
    'retina_detect': true
  });

}).call(this);

$('.dl-button').on('click', e => {

    let btn = $(e.currentTarget),
        label = btn.find('.label'),
        counter = label.find('.counter');

    if(!btn.hasClass('active') && !btn.hasClass('done')) {

        btn.addClass('active');

        setLabel(label, label.find('.default'), label.find('.state'));

        setTimeout(() => {
            counter.addClass('hide');
            counter.animate({
                width: 0
            }, 400, function() {
                label.width(label.find('.state > span').width());
                counter.removeAttr('style');
            });
            btn.removeClass('active').addClass('done');
        }, getComputedStyle(btn[0]).getPropertyValue('--duration'));

    }

    return false;

});

$('.restart').on('click', e => {

    let btn = $('.dl-button'),
        label = btn.find('.label'),
        counter = label.find('.counter');

    setLabel(label, label.find('.state'), label.find('.default'), function() {
        counter.removeClass('hide');
        btn.removeClass('done');
    });

    return false;

});

function setLabel(div, oldD, newD, callback) {
    oldD.addClass('hide');
    div.animate({
        width: newD.outerWidth()
    }, 200, function() {
        oldD.removeClass('show hide');
        newD.addClass('show');
        div.removeAttr('style');
        if(typeof callback === 'function') {
            callback();
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxXQUFBLENBQVksY0FBWixFQUNFO0lBQUEsV0FBQSxFQUNFO01BQUEsUUFBQSxFQUNFO1FBQUEsT0FBQSxFQUFTLEdBQVQ7UUFDQSxTQUFBLEVBQ0U7VUFBQSxRQUFBLEVBQVUsSUFBVjtVQUNBLFlBQUEsRUFBYztRQURkO01BRkYsQ0FERjtNQUtBLE9BQUEsRUFBUztRQUFBLE9BQUEsRUFBUyxDQUNoQixTQURnQixFQUVoQixTQUZnQjtNQUFULENBTFQ7TUFTQSxPQUFBLEVBQ0U7UUFBQSxNQUFBLEVBQVEsUUFBUjtRQUNBLFFBQUEsRUFDRTtVQUFBLE9BQUEsRUFBUyxDQUFUO1VBQ0EsT0FBQSxFQUFTO1FBRFQsQ0FGRjtRQUlBLFNBQUEsRUFBVztVQUFBLFVBQUEsRUFBWTtRQUFaO01BSlgsQ0FWRjtNQWVBLFNBQUEsRUFDRTtRQUFBLE9BQUEsRUFBUyxHQUFUO1FBQ0EsUUFBQSxFQUFVLEtBRFY7UUFFQSxNQUFBLEVBQ0U7VUFBQSxRQUFBLEVBQVUsS0FBVjtVQUNBLE9BQUEsRUFBUyxDQURUO1VBRUEsYUFBQSxFQUFlLEdBRmY7VUFHQSxNQUFBLEVBQVE7UUFIUjtNQUhGLENBaEJGO01BdUJBLE1BQUEsRUFDRTtRQUFBLE9BQUEsRUFBUyxDQUFUO1FBQ0EsUUFBQSxFQUFVLElBRFY7UUFFQSxNQUFBLEVBQ0U7VUFBQSxRQUFBLEVBQVUsS0FBVjtVQUNBLE9BQUEsRUFBUyxFQURUO1VBRUEsVUFBQSxFQUFZLEdBRlo7VUFHQSxNQUFBLEVBQVE7UUFIUjtNQUhGLENBeEJGO01BK0JBLGFBQUEsRUFDRTtRQUFBLFFBQUEsRUFBVSxJQUFWO1FBQ0EsVUFBQSxFQUFZLEVBRFo7UUFFQSxPQUFBLEVBQVMsTUFGVDtRQUdBLFNBQUEsRUFBVyxHQUhYO1FBSUEsT0FBQSxFQUFTO01BSlQ7SUFoQ0YsQ0FERjtJQXNDQSxlQUFBLEVBQ0U7TUFBQSxXQUFBLEVBQWEsUUFBYjtNQUNBLFFBQUEsRUFDRTtRQUFBLFNBQUEsRUFDRTtVQUFBLFFBQUEsRUFBVSxJQUFWO1VBQ0EsTUFBQSxFQUFRO1FBRFIsQ0FERjtRQUdBLFNBQUEsRUFBVztVQUFBLFFBQUEsRUFBVTtRQUFWLENBSFg7UUFJQSxRQUFBLEVBQVU7TUFKVixDQUZGO01BT0EsT0FBQSxFQUNFO1FBQUEsTUFBQSxFQUNFO1VBQUEsVUFBQSxFQUFZLEdBQVo7VUFDQSxhQUFBLEVBQWU7WUFBQSxTQUFBLEVBQVc7VUFBWDtRQURmLENBREY7UUFHQSxRQUFBLEVBQ0U7VUFBQSxVQUFBLEVBQVksR0FBWjtVQUNBLE1BQUEsRUFBUSxFQURSO1VBRUEsVUFBQSxFQUFZLENBRlo7VUFHQSxTQUFBLEVBQVcsQ0FIWDtVQUlBLE9BQUEsRUFBUztRQUpULENBSkY7UUFTQSxTQUFBLEVBQ0U7VUFBQSxVQUFBLEVBQVksR0FBWjtVQUNBLFVBQUEsRUFBWTtRQURaLENBVkY7UUFZQSxNQUFBLEVBQVE7VUFBQSxjQUFBLEVBQWdCO1FBQWhCLENBWlI7UUFhQSxRQUFBLEVBQVU7VUFBQSxjQUFBLEVBQWdCO1FBQWhCO01BYlY7SUFSRixDQXZDRjtJQTZEQSxlQUFBLEVBQWlCO0VBN0RqQixDQURGO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJwYXJ0aWNsZXNKUyAncGFydGljbGVzLWpzJyxcbiAgJ3BhcnRpY2xlcyc6XG4gICAgJ251bWJlcic6XG4gICAgICAndmFsdWUnOiAxMDBcbiAgICAgICdkZW5zaXR5JzpcbiAgICAgICAgJ2VuYWJsZSc6IHRydWVcbiAgICAgICAgJ3ZhbHVlX2FyZWEnOiAxMDAwXG4gICAgJ2NvbG9yJzogJ3ZhbHVlJzogW1xuICAgICAgJyMxMTExMTEnXG4gICAgICAnIzIyMjIyMidcbiAgICBdXG4gICAgJ3NoYXBlJzpcbiAgICAgICd0eXBlJzogJ2NpcmNsZSdcbiAgICAgICdzdHJva2UnOlxuICAgICAgICAnd2lkdGgnOiAwXG4gICAgICAgICdjb2xvcic6ICcjZmZmJ1xuICAgICAgJ3BvbHlnb24nOiAnbmJfc2lkZXMnOiA1XG4gICAgJ29wYWNpdHknOlxuICAgICAgJ3ZhbHVlJzogMC42XG4gICAgICAncmFuZG9tJzogZmFsc2VcbiAgICAgICdhbmltJzpcbiAgICAgICAgJ2VuYWJsZSc6IGZhbHNlXG4gICAgICAgICdzcGVlZCc6IDFcbiAgICAgICAgJ29wYWNpdHlfbWluJzogMC4xXG4gICAgICAgICdzeW5jJzogZmFsc2VcbiAgICAnc2l6ZSc6XG4gICAgICAndmFsdWUnOiAyXG4gICAgICAncmFuZG9tJzogdHJ1ZVxuICAgICAgJ2FuaW0nOlxuICAgICAgICAnZW5hYmxlJzogZmFsc2VcbiAgICAgICAgJ3NwZWVkJzogNDBcbiAgICAgICAgJ3NpemVfbWluJzogMC4xXG4gICAgICAgICdzeW5jJzogZmFsc2VcbiAgICAnbGluZV9saW5rZWQnOlxuICAgICAgJ2VuYWJsZSc6IHRydWVcbiAgICAgICdkaXN0YW5jZSc6IDgwXG4gICAgICAnY29sb3InOiAnIzExMSdcbiAgICAgICdvcGFjaXR5JzogMC45XG4gICAgICAnd2lkdGgnOiAxXG4gICdpbnRlcmFjdGl2aXR5JzpcbiAgICAnZGV0ZWN0X29uJzogJ2NhbnZhcydcbiAgICAnZXZlbnRzJzpcbiAgICAgICdvbmhvdmVyJzpcbiAgICAgICAgJ2VuYWJsZSc6IHRydWVcbiAgICAgICAgJ21vZGUnOiAnZ3JhYidcbiAgICAgICdvbmNsaWNrJzogJ2VuYWJsZSc6IGZhbHNlXG4gICAgICAncmVzaXplJzogdHJ1ZVxuICAgICdtb2Rlcyc6XG4gICAgICAnZ3JhYic6XG4gICAgICAgICdkaXN0YW5jZSc6IDI0MFxuICAgICAgICAnbGluZV9saW5rZWQnOiAnb3BhY2l0eSc6IDFcbiAgICAgICdidWJibGUnOlxuICAgICAgICAnZGlzdGFuY2UnOiA2MDBcbiAgICAgICAgJ3NpemUnOiA4MFxuICAgICAgICAnZHVyYXRpb24nOiA4XG4gICAgICAgICdvcGFjaXR5JzogNlxuICAgICAgICAnc3BlZWQnOiAzXG4gICAgICAncmVwdWxzZSc6XG4gICAgICAgICdkaXN0YW5jZSc6IDMwMFxuICAgICAgICAnZHVyYXRpb24nOiAwLjRcbiAgICAgICdwdXNoJzogJ3BhcnRpY2xlc19uYic6IDJcbiAgICAgICdyZW1vdmUnOiAncGFydGljbGVzX25iJzogNFxuICAncmV0aW5hX2RldGVjdCc6IHRydWUiXX0=
//# sourceURL=coffeescript