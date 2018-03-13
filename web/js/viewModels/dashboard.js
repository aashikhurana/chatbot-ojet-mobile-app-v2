
define(['ojs/ojcore', 'knockout', 'jquery', 'jet-composites/bot-client/loader'],
 function(oj, ko, $) {
  
    function DashboardViewModel() {
      var self = this;

      // self.websocketConnectionUrl = 'ws://141.144.22.12:8888/chat/ws';
      self.websocketConnectionUrl = 'wss://68c5fd2e.ngrok.io/chat/ws';
      self.userId = guid();
      self.channel = 'EEE5263E-8A45-4ACF-80DD-A34E5657C59E';


      self.handleActivated = function(info) {
        // Implement if needed
      };

      self.handleAttached = function(info) {
        // Implement if needed
      };

      self.handleBindingsApplied = function(info) {
        // Implement if needed
      };

      self.handleDetached = function(info) {
        // Implement if needed
      };

      function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
    }

    return new DashboardViewModel();
  }

  
);
