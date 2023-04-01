class ReviewsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # before_action :authorize
     
    #GET/reviews
     def index 
        render json: Review.all

    end

    #GET/reviews/id
    def show 

        review= Review.find(params[:id])
        render json: review
     
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
        params.permit(:user_id, :car_id, :rating, :comments)
    end
    def render_not_found_response
        render json: { error: "Review not found" }, status: :not_found
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :id
    end
      
end
