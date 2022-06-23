class PostsController < ApplicationController

  before_action :authenticate_user!, except: %i[index show]

   # GET /posts
  def index
    @posts = Post.all.order("created_at DESC")
  end

  # GET /posts/1
  def show
    @post = Post.find(params[:id])
  end

  # GET /posts/new
  def new
    @post = Post.new
  end

  # POST /posts
  def create
    @post = current_user.posts.build(post_params)

    if @post.save
      redirect_to root_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  # GET /posts/1/edit
  def edit
    #TODO: add a before_action so users cannot edit/delete other's posts
    @post = Post.find(params[:id])
  end

  # PATCH/PUT /posts/1
  def update
    @post = Post.find(params[:id])

    if @post.update(post_params)
      redirect_to root_path
    else
      render :edit, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to root_path
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end
end
