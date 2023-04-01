class ShowRoomsController < ApplicationController

  def index 
      render json: ShowRoom.all 
      end  
end
