'use strict';

// A simplified version of `exampleVideoData` to use for tests
window.moreFakeVideoData = [{
  etag: 'L332gQTY',
  id: {
    videoId: '000006'
  },
  snippet: {
    title: 'JavaScript Jabber',
    description: 'Here us jab about JavaScript',
    thumbnails: {
      default: {
        url: 'http://whiteprompt.com/wp-content/uploads/2015/09/logo-immutable.png'
      }
    }
  }
}, {
  etag: 'SmEuSYxg',
  id: {
    videoId: '000007'
  },
  snippet: {
    title: 'Angular Air',
    description: 'An in-depth discussion about Angular dirty checking',
    thumbnails: {
      default: {
        url: 'https://avatars0.githubusercontent.com/u/139426?v=3&s=400'
      }
    }
  }
}, {
  etag: 'ujBKBmLk',
  id: {
    videoId: '000008'
  },
  snippet: {
    title: 'React Rally',
    description: 'The React Hype Train is leaving the building!',
    thumbnails: {
      default: {
        url: 'http://www.coderstug.org/assets/images/section-past_events/discover-react.jpg'
      }
    }
  }
}, {
  etag: 'Nj7xszf8',
  id: {
    videoId: '000009'
  },
  snippet: {
    title: 'Backbone Broadcast',
    description: 'Learn how to organize your spaghetti code with this MV* framework',
    thumbnails: {
      default: {
        url: 'http://backbonejs.org/docs/images/backbone.png'
      }
    }
  }
}, {
  etag: 'I2w-7nRI',
  id: {
    videoId: '000010'
  },
  snippet: {
    title: 'Meteor Mashups',
    description: 'Meteor takes the JavaScript world by storm!',
    thumbnails: {
      default: {
        url: 'https://worldvectorlogo.com/logos/meteor-icon.svg'
      }
    }
  }
}];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NwZWMvZGF0YS9tb3JlRmFrZVZpZGVvRGF0YS5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJtb3JlRmFrZVZpZGVvRGF0YSIsImV0YWciLCJpZCIsInZpZGVvSWQiLCJzbmlwcGV0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRodW1ibmFpbHMiLCJkZWZhdWx0IiwidXJsIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0FBLE9BQU9DLGlCQUFQLEdBQTJCLENBQUM7QUFDMUJDLFFBQU0sVUFEb0I7QUFFMUJDLE1BQUk7QUFDRkMsYUFBUztBQURQLEdBRnNCO0FBSzFCQyxXQUFTO0FBQ1BDLFdBQU8sbUJBREE7QUFFUEMsaUJBQWEsOEJBRk47QUFHUEMsZ0JBQVk7QUFDVkMsZUFBUztBQUNQQyxhQUFLO0FBREU7QUFEQztBQUhMO0FBTGlCLENBQUQsRUFjeEI7QUFDRFIsUUFBTSxVQURMO0FBRURDLE1BQUk7QUFDRkMsYUFBUztBQURQLEdBRkg7QUFLREMsV0FBUztBQUNQQyxXQUFPLGFBREE7QUFFUEMsaUJBQWEscURBRk47QUFHUEMsZ0JBQVk7QUFDVkMsZUFBUztBQUNQQyxhQUFLO0FBREU7QUFEQztBQUhMO0FBTFIsQ0Fkd0IsRUE0QnhCO0FBQ0RSLFFBQU0sVUFETDtBQUVEQyxNQUFJO0FBQ0ZDLGFBQVM7QUFEUCxHQUZIO0FBS0RDLFdBQVM7QUFDUEMsV0FBTyxhQURBO0FBRVBDLGlCQUFhLCtDQUZOO0FBR1BDLGdCQUFZO0FBQ1ZDLGVBQVM7QUFDUEMsYUFBSztBQURFO0FBREM7QUFITDtBQUxSLENBNUJ3QixFQTBDeEI7QUFDRFIsUUFBTSxVQURMO0FBRURDLE1BQUk7QUFDRkMsYUFBUztBQURQLEdBRkg7QUFLREMsV0FBUztBQUNQQyxXQUFPLG9CQURBO0FBRVBDLGlCQUFhLG1FQUZOO0FBR1BDLGdCQUFZO0FBQ1ZDLGVBQVM7QUFDUEMsYUFBSztBQURFO0FBREM7QUFITDtBQUxSLENBMUN3QixFQXdEeEI7QUFDRFIsUUFBTSxVQURMO0FBRURDLE1BQUk7QUFDRkMsYUFBUztBQURQLEdBRkg7QUFLREMsV0FBUztBQUNQQyxXQUFPLGdCQURBO0FBRVBDLGlCQUFhLDZDQUZOO0FBR1BDLGdCQUFZO0FBQ1ZDLGVBQVM7QUFDUEMsYUFBSztBQURFO0FBREM7QUFITDtBQUxSLENBeER3QixDQUEzQiIsImZpbGUiOiJtb3JlRmFrZVZpZGVvRGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEEgc2ltcGxpZmllZCB2ZXJzaW9uIG9mIGBleGFtcGxlVmlkZW9EYXRhYCB0byB1c2UgZm9yIHRlc3RzXG53aW5kb3cubW9yZUZha2VWaWRlb0RhdGEgPSBbe1xuICBldGFnOiAnTDMzMmdRVFknLFxuICBpZDoge1xuICAgIHZpZGVvSWQ6ICcwMDAwMDYnXG4gIH0sXG4gIHNuaXBwZXQ6IHtcbiAgICB0aXRsZTogJ0phdmFTY3JpcHQgSmFiYmVyJyxcbiAgICBkZXNjcmlwdGlvbjogJ0hlcmUgdXMgamFiIGFib3V0IEphdmFTY3JpcHQnLFxuICAgIHRodW1ibmFpbHM6IHtcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdXJsOiAnaHR0cDovL3doaXRlcHJvbXB0LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8wOS9sb2dvLWltbXV0YWJsZS5wbmcnLFxuICAgICAgfVxuICAgIH1cbiAgfVxufSwge1xuICBldGFnOiAnU21FdVNZeGcnLFxuICBpZDoge1xuICAgIHZpZGVvSWQ6ICcwMDAwMDcnXG4gIH0sXG4gIHNuaXBwZXQ6IHtcbiAgICB0aXRsZTogJ0FuZ3VsYXIgQWlyJyxcbiAgICBkZXNjcmlwdGlvbjogJ0FuIGluLWRlcHRoIGRpc2N1c3Npb24gYWJvdXQgQW5ndWxhciBkaXJ0eSBjaGVja2luZycsXG4gICAgdGh1bWJuYWlsczoge1xuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB1cmw6ICdodHRwczovL2F2YXRhcnMwLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzEzOTQyNj92PTMmcz00MDAnLFxuICAgICAgfVxuICAgIH1cbiAgfVxufSzCoHtcbiAgZXRhZzogJ3VqQktCbUxrJyxcbiAgaWQ6IHtcbiAgICB2aWRlb0lkOiAnMDAwMDA4J1xuICB9LFxuICBzbmlwcGV0OiB7XG4gICAgdGl0bGU6ICdSZWFjdCBSYWxseScsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgUmVhY3QgSHlwZSBUcmFpbiBpcyBsZWF2aW5nIHRoZSBidWlsZGluZyEnLFxuICAgIHRodW1ibmFpbHM6IHtcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdXJsOiAnaHR0cDovL3d3dy5jb2RlcnN0dWcub3JnL2Fzc2V0cy9pbWFnZXMvc2VjdGlvbi1wYXN0X2V2ZW50cy9kaXNjb3Zlci1yZWFjdC5qcGcnLFxuICAgICAgfVxuICAgIH1cbiAgfVxufSzCoHtcbiAgZXRhZzogJ05qN3hzemY4JyxcbiAgaWQ6IHtcbiAgICB2aWRlb0lkOiAnMDAwMDA5J1xuICB9LFxuICBzbmlwcGV0OiB7XG4gICAgdGl0bGU6ICdCYWNrYm9uZSBCcm9hZGNhc3QnLFxuICAgIGRlc2NyaXB0aW9uOiAnTGVhcm4gaG93IHRvIG9yZ2FuaXplIHlvdXIgc3BhZ2hldHRpIGNvZGUgd2l0aCB0aGlzIE1WKiBmcmFtZXdvcmsnLFxuICAgIHRodW1ibmFpbHM6IHtcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdXJsOiAnaHR0cDovL2JhY2tib25lanMub3JnL2RvY3MvaW1hZ2VzL2JhY2tib25lLnBuZycsXG4gICAgICB9XG4gICAgfVxuICB9XG59LMKge1xuICBldGFnOiAnSTJ3LTduUkknLFxuICBpZDoge1xuICAgIHZpZGVvSWQ6ICcwMDAwMTAnXG4gIH0sXG4gIHNuaXBwZXQ6IHtcbiAgICB0aXRsZTogJ01ldGVvciBNYXNodXBzJyxcbiAgICBkZXNjcmlwdGlvbjogJ01ldGVvciB0YWtlcyB0aGUgSmF2YVNjcmlwdCB3b3JsZCBieSBzdG9ybSEnLFxuICAgIHRodW1ibmFpbHM6IHtcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly93b3JsZHZlY3RvcmxvZ28uY29tL2xvZ29zL21ldGVvci1pY29uLnN2ZycsXG4gICAgICB9XG4gICAgfVxuICB9XG59XTtcbiJdfQ==