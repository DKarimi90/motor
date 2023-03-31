class ApplicationController < ActionController::API

        # Add these lines to enable CORS for the React app
        before_action :set_headers
      
        def set_headers
          headers['Access-Control-Allow-Origin'] = 'http://localhost:3001'
          headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
          headers['Access-Control-Allow-Headers'] = 'X-Requested-With, X-Prototype-Version'
        end
      

end
