class CarsController < ApplicationController
        #GET/cars 
        def index
            render json: Car.all 
        end
    
        #GET/cars/:id
        def show 
            car = Car.find(params[:id])
            if car 
                render json: car, status: :ok
            else
                render json: { error: "Car not found"}, status: :not_found
            end
        end
    
        #PUT/cars/:id
        def update 
            car = Cars.find(params[:id])
            if car
                car.update(car_params)
                render json: car 
            else
                render json: { error: "Car not found"}, status: :not_found
            end
        end
    
        #POST/cars
        def create
            car = Car.create(car_params)
            if car.valid?
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
            params.permit(:image_url, :name, :model, :mileage, :price, :transmission, :status, :show_room_id)
        end
    

end
