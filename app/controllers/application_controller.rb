class ApplicationController < ActionController::Base
  protected

  # Ensure the user is redirected to the
  def after_sign_in_path_for(resource)
    root_path
  end
end
