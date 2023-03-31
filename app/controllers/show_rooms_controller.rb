class ShowRoomsController < ApplicationController
      #GET/showrooms
      def index 
        render json: ShowRoom.all 
    end
end
