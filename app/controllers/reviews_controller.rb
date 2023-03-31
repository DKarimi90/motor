class ReviewsController < ApplicationController

        #GET/reviews
        def index 
            render json: Review.all
        end
    
        #POST/review 
        def create 
            review = Review.create(review_params)
            if review.valid?
                render json: review 
            else
                render json: { error: "Review not found"}, status: :not_found
            end
    
        end
    
        #DELETE/review/:id
        def destroy 
            review = Review.find(params[:id])
            review.delete 
            head :no_content
        end
    
        private 
        def review_params
            params.permit(:user_id, :car_id, :description, :comments)
        end
    
    
end
