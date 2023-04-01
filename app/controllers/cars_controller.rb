class CarsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # before_action :authorize
    # skip_before_action :authorize, only: [:index]


    #GET/cars 
    def index
        render json: Car.all 
    end

    #GET/cars/:id
    def show 
        car = Car.find(params[:id])
        render json: car
    end
    

    # #PUT/cars/:id updating price of a car
    def update
        car = Car.find(params[:id])
        car.update!(car_params)
        render json: car

    # rescue ActiveRecord::RecordInvalid => invalid
    #     render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    # POST/cars
    def create
        car = Car.create(car_params)
         if car
            render json: car, status: :created
        else 
            render json: {errors: "validation errors"}, status: :unprocessable_entity
        end
    end

    #DELETE/cars 
    def destroy 
        car = Car.find(params[:id])
        car.delete 
        head :no_content
    end


    private 
    def car_params
        params.permit(:image_url, :name, :model, :mileage, :price, :transmission, :show_room_id)
    end

    def render_not_found_response
        render json: { error: "Car not found" }, status: :not_found
    end
    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
      

end
